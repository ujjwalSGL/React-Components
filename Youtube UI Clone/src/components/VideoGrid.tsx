import { VideoCard } from "./VideoCard"

const VideoID = [
    {
        tittle: "JavaScript Crash Course",
        image: "channel.png",
        view: "100k",
        author: "Ujjwal",
        timeStamp: "1 day ago",
        thumbImage: "tn1.jpg"

    },
    {
        tittle: "JavaScript Crash Course",
        image: "channel.png",
        view: "100k",
        author: "Ujjwal",
        timeStamp: "1 day ago",
        thumbImage: "tn1.jpg"
    },
    {
        tittle: "JavaScript Crash Course",
        image: "channel.png",
        view: "100k",
        author: "Ujjwal",
        timeStamp: "1 day ago",
        thumbImage: "tn1.jpg"
    },
    {tittle:"JavaScript Crash Course",
        image:"channel.png",
        view:"100k",
        author:"Ujjwal",
        timeStamp:"1 day ago",
        thumbImage:"tn1.jpg"
    },
    {tittle:"JavaScript Crash Course",
        image:"channel.png",
        view:"100k",
        author:"Ujjwal",
        timeStamp:"1 day ago",
        thumbImage:"tn1.jpg"
    },
    {tittle:"JavaScript Crash Course",
        image:"channel.png",
        view:"100k",
        author:"Ujjwal",
        timeStamp:"1 day ago",
        thumbImage:"tn1.jpg"
    },
    {tittle:"JavaScript Crash Course",
        image:"channel.png",
        view:"100k",
        author:"Ujjwal",
        timeStamp:"1 day ago",
        thumbImage:"tn1.jpg"
    },
    {tittle:"JavaScript Crash Course",
        image:"channel.png",
        view:"100k",
        author:"Ujjwal",
        timeStamp:"1 day ago",
        thumbImage:"tn1.jpg"
    },
    {tittle:"JavaScript Crash Course",
        image:"channel.png",
        view:"100k",
        author:"Ujjwal",
        timeStamp:"1 day ago",
        thumbImage:"tn1.jpg"
    },
    {tittle:"JavaScript Crash Course",
        image:"channel.png",
        view:"100k",
        author:"Ujjwal",
        timeStamp:"1 day ago",
        thumbImage:"tn1.jpg"
    },
]

export const VideGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {VideoID.map(video => <div>
            <VideoCard
            title={video.tittle}
            image={video. image}
            thumbImage={video.thumbImage}
            author={video.author}
            view={video.view}
            timeStamp={video.timeStamp}
            >
            </VideoCard>
        </div>)}
    </div>
}