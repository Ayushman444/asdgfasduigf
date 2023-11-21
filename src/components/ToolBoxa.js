import React from 'react'

import { FaPencil } from 'react-icons/fa6'
import { CgColorBucket } from 'react-icons/cg'
import {BiRectangle} from 'react-icons/bi'
import {BsCircle} from 'react-icons/bs'
import {BsTriangle} from 'react-icons/bs'
import {BiSolidEraser} from 'react-icons/bi'


export const ToolBoxa = ({setUndoRef}) => {
    return (
        <div className="bg-gray-300 border-2 border-black w-[738px] h-24 mx-auto flex flex-col items-center">
            <div className='flex flex-row items-center'>
                <div className="flex">
                    <button className=" bg-blue-400 mr-2 mt-2 ml-2 border rounded-sm p-1" id='Undo' ref={setUndoRef}>Undo</button>
                    <button className=" bg-blue-400 mr-2 mt-2 ml-2 border rounded-sm p-1" id='Clear'>Clear</button>
                    <button className='option tool' id='Pen'><FaPencil className='h-5 w-5 mr-4 my-auto' /></button>
                    <button className='option tool' id='Bucket'><CgColorBucket className='h-5 w-5 mr-4 my-auto' /></button>
                    <button className='option tool' id='Eraser'><BiSolidEraser className='h-5 w-5 mr-4 my-auto' /></button>
                </div>

                <div className="flex">
                    {/* Color divs (replace color values as needed) */}
                    <div className="tool bg-red-500 w-8 h-8 mr-1"></div>
                    <div className="tool bg-green-500 w-8 h-8 mr-1"></div>
                    <div className="tool bg-blue-500 w-8 h-8 mr-1"></div>
                    <div className="tool bg-yellow-500 w-8 h-8 mr-1"></div>
                    <div className="bg-purple-500 w-8 h-8 mr-1 tool"></div>
                    <div className="bg-orange-500 w-8 h-8 mr-1 tool"></div>
                    <div className="bg-gray-500 w-8 h-8 mr-1 tool"></div>
                    <div className="bg-pink-500 w-8 h-8 mr-1 tool"></div>
                    <div className="bg-indigo-500 w-8 h-8 mr-1 tool"></div>
                    <div className="bg-teal-500 w-8 h-8 mr-1 tool"></div>
                    <div className="bg-cyan-500 w-8 h-8 mr-1 tool"></div>
                    <div className="bg-gray-700 w-8 h-8 tool"></div>
                </div>

                <div className="flex items-center ml-6">

                    <input type="range" id="brush-size" min="1" max="100" className="w-20" />
                </div>


            </div>

            <div className='mt-2 flex flex-row '>

                <button className='bg-blue-400 mx-4 tool' id='Rectangle'> <BiRectangle className='h-8 w-8' /> </button>
                <button className='bg-blue-400 mx-4 tool' id='Circle'> <BsCircle className='h-8 w-8' /> </button>
                <button className='bg-blue-400 mx-4 tool' id='Triangle'> <BsTriangle className='h-8 w-8' /> </button>

            </div>
        </div>
    )
}
