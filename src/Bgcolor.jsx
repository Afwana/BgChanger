import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'


function Bgcolor() {
    const [colors, setColor] = useState("black")
    const click = (color) => {
        setColor(color)
    }
    useEffect(() => {
        document.body.style.backgroundColor = colors
    }, [colors])
    return (
        <>
            <div className=''>
                <div className=''
                    style={{ height: '100vh', width: '100%' }}>
                    <h1 className='text-light d-flex justify-content-center  text-center' style={{ color: 'white' }}></h1>
                    {/* <div className='d-flex justify-content-center ' style={{ marginTop: '100px' }}>
                        <h1 className='text-light d-flex justify-content-center text-center ' style={{ color: 'white' }}>Background Color Change</h1>
                    </div> */}
                    <div className='d-flex justify-content-center ' style={{ marginTop: '100px' }}>

                        <Button className='btn btn-primary text-light me-3' id='blue' onClick={() => click("blue")}></Button>
                        <Button className='btn btn-secondary text-light me-3' id='grey' onClick={() => click("#4f4e4e")}></Button>
                        <Button className='btn btn-success text-light me-3 rounded-pill' id='green' onClick={() => click("green")}></Button>
                        <Button className='btn btn-danger text-light me-3' id='red' onClick={() => click("red")}></Button>
                        <Button className='btn btn-warning text-light me-3' id='yellow' onClick={() => click("yellow")}></Button>
                        <Button className='btn btn-info text-light me-3' id='lightblue' onClick={() => click("aqua")}></Button>
                        <Button className='btn btn-light text-light me-3' id='white' onClick={() => click("white")}></Button>
                        <Button className='btn btn-dark text-light me-3' id='black' onClick={() => click("black")}></Button>
                        <Button style={{backgroundColor:'#e1b26d',border:'none'}} className='btn text-light me-3' id='orenge' onClick={() => click("#e1b26d")}></Button>
                        <Button style={{backgroundColor:'#d083b5',border:'none'}} className='btn btn-danger text-light me-3' id='purple' onClick={() => click("#d083b5")}></Button>
                        <Button style={{backgroundColor:'#bd83d0',border:'none'}} className='btn btn-danger text-light me-3' id='pink' onClick={() => click("#bd83d0")}></Button>
                        <Button style={{backgroundColor:'#66d7ad',border:'none'}} className='btn btn-danger text-light me-3' id='red' onClick={() => click("#66d7ad")}></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bgcolor