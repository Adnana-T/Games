import { Badge, HStack } from '@chakra-ui/react'

interface Props {
    score : number
}
const CriticScore = ({score} : Props) => {
    const color =  score >= 90 ? 'green' : score > 80 ? 'yellow' : 'red'
  return (
     <Badge colorScheme={color} borderRadius={'4px'} paddingX={2}>{score}</Badge>
  )
}

export default CriticScore