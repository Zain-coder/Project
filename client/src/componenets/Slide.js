import React from 'react'
import { Carousel } from 'bootstrap'
function Slide() {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="new.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="Leads.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="download.png" class="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Slide
