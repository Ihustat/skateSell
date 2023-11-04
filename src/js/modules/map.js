export class Map {
    constructor(mapContainer, shops) {
        this.mapContainer = document.querySelector(mapContainer);
        this.shops = document.querySelectorAll(shops);
        this.shopsData = [{
            coords: [45.041738, 38.977373],
            title: 'Cherdak',
            descr: 'SkateShop',
            img: 'images/map/map-1.jpg',
            tel: '0-000-000-00-00',
            info: 'Cool',
            hint: 'Padval skateshop'
        },
        {
            coords: [45.056053, 38.978960],
            title: 'Tropa',
            descr: 'SkateShop',
            img: 'images/map/map-2.jpg',
            tel: '0-000-000-00-00',
            info: 'Cool',
            hint: 'Tropa skateshop'
        },
        {
            coords: [45.032477, 39.000349],
            title: 'Tochka',
            descr: 'SkateShop',
            img: 'images/map/map-3.jpg',
            tel: '0-000-000-00-00',
            info: 'Cool',
            hint: 'Tochka skateshop'
        }];
    }

    createMap(container, shops, shopsData, addMarker) {
        ymaps.ready(function() {
            let map = new ymaps.Map(container, {
                center: [45.068962, 38.992622],
                zoom: 10,
                controls: ['zoomControl', 'geolocationControl']
            });

            shopsData.forEach(shop => {
                addMarker(map, shop);
            });

            shops.forEach(shop => {
                shop.addEventListener('click', (e) => {
                    const target = e.target.closest('.place');
                    if (target) {
                        const coords =  [+target.dataset.long, +target.dataset.lat];
                        map.setCenter(coords, 15);
                        target.querySelector('.place__tip').remove();
                    }
                });
            });

        });
    }

    addMarker(mapContainer, obj) {

        const {coords, title, descr, img, tel, info, hint} = obj;
        const placemark = new ymaps.Placemark(coords, {
            balloonContentHeader: `<a href = "#">${title}</a><br>
            <span class="description">${descr}</span>`,
            balloonContentBody: `<img src="${img}" height="150" width="200"> <br/> 
            <a href="tel:+${tel}">${tel}</a><br/>
            <b>${info}</b> <br/>`,
            hintContent: `${hint}`
        });

        mapContainer.geoObjects.add(placemark);
    }


    initMap() {
        this.createMap(this.mapContainer, this.shops, this.shopsData, this.addMarker)
    }

};