import React, { Component } from 'react';

const data = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./img/glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./img/glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./img/glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./img/glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./img/glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./img/glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./img/glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./img/glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./img/glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]

class LayOutThayKinh extends Component {
    state = {
        glass: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
    }

    handleClick = (itemGlasses) => {
        this.setState({glass: itemGlasses});
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-secondary ">
                    <div class="container-fluid justify-content-center">
                        <a class="navbar-brand fs-3 fw-bolder" href="#">
                            TRY GLASSES APP ONLINE
                        </a>
                    </div>
                </nav>
                <section class="container d-flex justify-content-center mt-5">
                    <div class="col-4">
                        <div class="card card-img" style={{ width: '70%' }}>
                            <img class="w-50" src={this.state.glass.url} />
                            <div class="card-body vglasses__info ">
                                <h2 class="text-success">{this.state.glass.name}</h2>
                                <p class="text-danger">price: {this.state.glass.price}</p>
                                <p class="text-dark desc">{this.state.glass.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class=" text-center" style={{ width: '70%' }}>
                            <img class='w-100' src='./img/glassesImage/model.jpg' />
                        </div>
                    </div>
                </section>
                <section class="itemGlasses row container mt-5 bg-light">
                    {data.map(itemGlasses => {
                        return <div class="col-2 mt-2" key={itemGlasses.id}>
                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer'}} 
                            onClick={()=>{this.handleClick(itemGlasses)}} >
                                <img class="w-50" src={itemGlasses.url} />
                            </button>
                        </div>
                    })}

                </section>
            </div>
        );
    }
}

export default LayOutThayKinh; 