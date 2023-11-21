
import { useRef } from "react";

import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

export function useOnDraw({ onDraw, onUndo }) {
    const canvasRef = useRef(null);
    const isDrawing = useRef(false);

    const mouseMoveListenerRef = useRef(null);
    const mouseUpListenerRef = useRef(null);
    const mouseDownListenerRef = useRef(null);

    const prevPointRef = useRef(null);

    // const drawHistoryRef = useRef([]);
    // const currentDrawRef = useRef([]);
    const undoButtonRef = useRef(null);



    function setCanvasRef(ref) {
        if (!ref) return;
        // if (canvasRef.current) {
        //     canvasRef.current.removeEventListener("mousedown", mouseDownListenerRef.current);
        // }
        canvasRef.current = ref;
        initMouseMoveListener();
        initMouseDownListener();
        initMouseUpListener();
    }

    function initMouseMoveListener() {
        const mouseMoveListener = (e) => {
            if (isDrawing.current) {
                const point = computePointInCanvas(e.clientX, e.clientY);
                const ctx = canvasRef.current.getContext('2d');
                if (onDraw) {
                    socket.emit('draw', { point, prevPoint: prevPointRef.current });
                    onDraw(ctx, point, prevPointRef.current);

                }
                prevPointRef.current = point;

            }
        }
        mouseMoveListenerRef.current = mouseMoveListener;
        window.addEventListener("mousemove", mouseMoveListener)
    }




    socket.on('ondraw', ({ point, prevPoint }) => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            onDraw(ctx, point, prevPoint);
        }

    })




    function initMouseDownListener() {
        if (!canvasRef.current) return;
        const listener = () => {
            isDrawing.current = true;
        }
        mouseDownListenerRef.current = listener;
        canvasRef.current.addEventListener("mousedown", listener);
    }

    function initMouseUpListener() {
        const listener = () => {
            isDrawing.current = false;
            prevPointRef.current = null;
        }
        mouseUpListenerRef.current = listener;
        window.addEventListener("mouseup", listener);
    }

    function computePointInCanvas(clientX, clientY) {
        if (canvasRef.current) {
            const boundingRect = canvasRef.current.getBoundingClientRect();
            return {
                x: clientX - boundingRect.left,
                y: clientY - boundingRect.top
            }
        }
        else {
            return null;
        }

    }

    function setUndoRef(ref) {
        if (!ref) return;
        undoButtonRef.current = ref;
        initUndoButtonListener();

    }

    function initUndoButtonListener() {
        const listener = () => {
            if (onUndo) onUndo();
        };
        undoButtonRef.current.addEventListener("click", listener)
        return () => {
            undoButtonRef.current.removeEventListener("click", listener)
        }
    }

    return { setCanvasRef, setUndoRef };
}
