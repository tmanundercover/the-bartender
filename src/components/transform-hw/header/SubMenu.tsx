import React, {FunctionComponent, useState} from 'react'
import {Grid, List, ListItem, Typography} from '@material-ui/core'
import {v4 as uuidv4} from 'uuid'
import {SanityMenuGroup, SanityMenuItem} from "../../../common/sanityIo/Types";


interface SubMenuProps {
    subMenu: SanityMenuGroup
    handleClose?:(e:any)=>void
}

const SubMenu: FunctionComponent<SubMenuProps> = (props) => {
    return (<Grid item container key={uuidv4()}>
        <List style={{padding:0}}>
            {
                props.subMenu?.links?.map((theLink: SanityMenuItem, index: number) => {
                    console.log("submenu link", theLink)
                    return <ListItem href={'/'} onClick={props.handleClose} key={uuidv4()+index} button style={{height: "48px"}}>
                        <Typography variant='body1' style={{color: "#1a1a1a", fontSize:"18px"}}>{theLink.displayText}</Typography>
                    </ListItem>
                })
            }
        </List>
    </Grid>)
}

export default SubMenu