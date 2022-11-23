import React, {FunctionComponent} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import {abBlockSerializers} from './common/sanityIo/BlockContentRenderer'
import sanityClient from '../../sanityClient'

export type BlockContentContainerProps = { body?: any | undefined }

const BlockContentContainer: FunctionComponent<BlockContentContainerProps> = ({body}) => {
  return <BlockContent
    blocks={body}
    serializers={abBlockSerializers}
    projectId={sanityClient.config().projectId}
    dataset={sanityClient.config().dataset}
  />
}

export default BlockContentContainer
