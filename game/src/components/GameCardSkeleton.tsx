import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton  height={'200px'} width={'5xl'}/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}
export default GameCardSkeleton