

export function VideoCard(props : any){
    return <div className="p-12 cursor-pointer">
      <img  src={props.thumbImage} alt="" />
    <div className="grid grid-cols-12 ">
        <div className="col-span-1">
            <img className="rounded-full w-14 h-16" src={props.image} alt="" />
        </div>
        <div className="col-span-11 pl-2">
        {props.tittle}
        <div className="text-neutral-400 text-base">
            {props.author}
        </div>
        <div className="text-neutral-400 text-base">
        {props.view} | {props.timeStamp}
        </div>
        </div>
        
    </div>
    </div>
}

 