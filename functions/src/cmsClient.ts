import {log} from "./logClient";
import {sanityClient} from "./sanityClient";
import {SanityCocktailType, SanityColdLead, SanityTransformHwHomePage} from "../../src/common/sanityIo/Types";
import groqQueries from "../../src/utils/groqQueries";

const createColdLead = async (coldLead: SanityColdLead) => {
  log("createSanityColdLead", "DEBUG", "creating cold lead ", coldLead.email);

  const newColdLead: SanityColdLead = {
    ...coldLead,
  };

  log("createSanityColdLead", "DEBUG", "potential cold lead ", newColdLead);

  return sanityClient.create({
    _type: "coldLead",
    ...newColdLead,
  }).catch((e:any)=>{
    log("createSanityColdLead", "ERROR", "creating cold lead ", {newColdLead, e});
    return Promise.reject(e.message);
  });
};

const fetchPage = async (pageSlug:string)=>{
  return sanityClient
      .fetch(
          `*[slug.current == $pageSlug]{
          ${groqQueries.HOMEPAGE}
       }`, {pageSlug})
      .then((data: SanityTransformHwHomePage[]) => {
        log("fetchPage", "NOTICE", "fetched page", {pageSlug, page: data[0]});
        return data[0];
      })
      .catch((e:Error)=>{
        console.error({pageSlug, message: e.message});
        Promise.reject(e.message);
      });
};

const fetchDrinkBySlug = async (drinkSlug:string)=>{
  return sanityClient
      .fetch(
          `*[slug.current == $drinkSlug && type=="cocktail"]{
          ${groqQueries.COCKTAIL}
       }`, {drinkSlug})
      .then((data: SanityCocktailType[]) => {
        log("fetchPage", "NOTICE", "fetched page", {pageSlug: drinkSlug, page: data[0]});
        return data[0];
      })
      .catch((e:Error)=>{
        console.error({pageSlug: drinkSlug, message: e.message});
        Promise.reject(e.message);
      });
};


export {fetchDrinkBySlug, createColdLead, fetchPage};
