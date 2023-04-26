import noImage from '../assets/no-image-placeholder.webp'

const getCropped = (Url : string)=>{
    if(!Url) return noImage;
const target = 'media/';
const index =   Url.indexOf(target) + target.length;
return Url.slice(0 , index) + 'crop/600/400/' + Url.slice(index)
}

export default getCropped