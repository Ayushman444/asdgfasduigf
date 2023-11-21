import React from 'react'
import { useOnDraw } from '../hooks/useOnDraw'
import { ToolBoxa } from '../components/ToolBoxa';




export const Canvasa = () => {

    const { setCanvasRef, setUndoRef } = useOnDraw({
        onDraw,
        onUndo,
    });

    

    function onDraw(ctx, point, prevPoint) {
        drawLine(prevPoint, point, ctx, '#000000', 5);
    }


    function drawLine(start, end, ctx, color, width) {
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
        ctx.fill();
    }

    function onUndo (){
        console.log("Undo")
    }



    return (
        <div className='flex flex-col items-center'>
            <canvas id='canvas' className=" bg-white border-2 border-black w-5/6 h-[500px]"
                ref={setCanvasRef}
            ></canvas>

            <ToolBoxa setUndoRef={setUndoRef} />
        </div>
    )
}
