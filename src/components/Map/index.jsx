import React from 'react'
import { YMaps, Map, Clusterer, Placemark } from 'react-yandex-maps'

const point = {
  name: 'Флорариумы на заказ',
  address: 'ул.Чертановская д.21 к.1',
  coords: [55.621832, 37.595512],
}

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 9,
  behaviors: ['default', 'scrollZoom'],
}

function MapContent() {
  return (
    <YMaps>
      <Map
        state={mapState}
        width='100%'
        height='100%'
        style={{ flex: '1 1 100%' }}>
        <Clusterer
          options={{
            preset: 'islands#invertedVioletClusterIcons',
            groupByCoordinates: false,
            clusterDisableClickZoom: true,
            clusterHideIconOnBalloonOpen: false,
            geoObjectHideIconOnBalloonOpen: false,
          }}>
          <Placemark
            geometry={point.coords}
            properties={{
              balloonContentHeader: point.name,
              balloonContentBody: `Наш адрес: ${point.address}`,
              hintContent: 'Мы здесь!',
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            options={{ preset: 'islands#violetIcon' }}
          />
        </Clusterer>
      </Map>
    </YMaps>
  )
}

export default MapContent
