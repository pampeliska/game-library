import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;
    
    const target = "media/";
    // url https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
    // url smaller size https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
    const index =  url.indexOf(target) + target.length; //put changes behind target
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default getCroppedImageUrl;