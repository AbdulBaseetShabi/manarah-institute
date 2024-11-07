interface EventCardProps {
    index: number;
}

const EventCard = ({ index }: EventCardProps) => {
    const isEvenIndex = (index / 2) === 0;

    return (
        <div className={`flex flex-wrap justify-center ${isEvenIndex ? "" : "md:flex-row-reverse"} w-full my-16`}>
            <div className="w-1/2 min-w-96 h-96" style={{ padding: "0 2.5% 0 0"}}>
                <div className="bg-amber-700 h-96">Image Box 1</div>
                <div className="h-96 border-black border-2 bg-green-100" style={{ transform: "translate(2.5%, -102.5%)"}}>Image Box 2</div>
            </div>
            <div className="h-96 border-black border-2 bg-yellow-100 w-1/2 min-w-96">

            </div>
        </div>
    );
}

export default EventCard

// origin-bottom -rotate-12 -translate-x-full


{/* <div className="h-full w-1/2 min-w-96">
<div className="bg-amber-700 h-full">Image Box 1</div>
<div className="h-full border-black border-2 bg-green-100 -translate-y-full origin-bottom -rotate-12">Image Box 2</div>
</div> */}


// YOU DONT NEED 2 DIVS ONE PARENT AND ONE CHILD SHOULD