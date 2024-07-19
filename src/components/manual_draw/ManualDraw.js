import { BackgroundImage } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';

export default function ManualDraw() {
    const canvasRef = useRef(null);
    const [isEraser, setIsEraser] = useState(false);
    const [canvas, setCanvas] = useState(null);

    useEffect(() => {
        if (!window.fabric) {
            console.error('Fabric.js is not loaded');
            return;
        }
        
        // Initialize the fabric canvas only once
        if (canvasRef.current && !canvas) {
            const fabricCanvas = new window.fabric.Canvas(canvasRef.current, {
                isDrawingMode: true,
            });
            
            setCanvas(fabricCanvas);
            // setBackgroundImage(fabricCanvas, 'https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_1280.jpg');
        }
    }, [canvas]); // Dependency only on canvas initialization

    useEffect(() => {
        if (!canvas) return;

        // Configure drawing properties based on whether erasing or drawing
        if (isEraser){
            const brush = new window.fabric.EraserBrush(canvas);
            brush.width = 20;
            brush.opacity = 0.5;
            canvas.freeDrawingBrush = brush;
        }else{
            const brush = new window.fabric.PencilBrush(canvas);
            brush.opacity = 0.5;
            brush.color = 'white';
            brush.width = 20;
            canvas.freeDrawingBrush = brush;
            console.log('Brush opacity:', brush.opacity);
        }
        
    }, [isEraser, canvas]); // Reconfigure brush when isEraser or canvas changes

    const toggleEraser = () => {
        setIsEraser(!isEraser);
    };
    const saveCanvasAsPNG = () => {
        if (!canvas) return;

        const dataURL = canvas.toDataURL({
            format: 'png',
            quality: 1.0 // Optional: can range from 0 (low quality) to 1 (high quality)
        });

        const link = document.createElement('a');
        link.download = 'canvas-drawing.png'; // Name of the file
        link.href = dataURL;
        link.click();
    };


    

    return (
        <div style={{ position: 'relative', width: '800px', height: '600px' }}>
            
            <img src="https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_1280.jpg" alt="Background" style={{width: '100%', height: '100%', position: 'absolute', left: '0', top: '0',
            }} />
            <canvas
                ref={canvasRef}
                width="800"
                height="600"
                style={{ position: 'absolute', left: '0', top: '0', border: '1px solid #ccc' }}
                // onMouseDown={startDrawing}
                // onMouseMove={draw}
                // onMouseUp={endDrawing}
                // onMouseOut={endDrawing}
            />
            <button style={{padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px'}} onClick={toggleEraser} >{isEraser ? 'Pencil' : 'Eraser'}</button>
            <button onClick={saveCanvasAsPNG}>Save as PNG</button>
        </div>


    );
}
