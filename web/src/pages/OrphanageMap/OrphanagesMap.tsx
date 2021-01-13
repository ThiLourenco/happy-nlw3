import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


import mapMarkerImg from '../../images/map-marker.svg';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

import './orphanages-map.css';

interface Orphanage {
	id: number;
	latitude: number;
	longitude: number;
	name: string;
}

function OrphanagesMap() {
	const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
	
	useEffect(() => {
		api.get('orphanages').then(response => {
			setOrphanages(response.data);
		});
	}, []);

	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={mapMarkerImg} alt="Happy" />

					<h2>Escolha um orfanado no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita :)</p>
				</header>

				<footer>
					<strong>Cabo Frio</strong>
					<span>Rio de Janeiro</span>
				</footer>
			</aside>

			<Map
				center={[-22.8803892,-42.0363707]}
				zoom={14.25}
				style={{ width: '100%', height:'100%'}}
			>	
				{/*Caso não queira utilizar o mapbox utilize a linha de código abaixo, caso tenha uma conta no mapbox, siga as instruções no readme para incluir a seu token do mapbox no projeto/*}

				{/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
				<TileLayer 
						url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
				/>  
				
				{orphanages.map(orphanage => {
					return (
						<Marker 
							icon={mapIcon}
							position={[orphanage.latitude, orphanage.longitude]}
							key={orphanage.id}
								>
							<Popup closeButton= {false} minWidth={240} maxHeight={240} className="map-popup">
								{orphanage.name}
								<Link to={`/orphanages/${orphanage.id}`}>
									<FiArrowRight size={20} color="#FFF" />
								</Link>
							</Popup>
						</Marker>
					)
				})}
			</Map>
		
			<Link to="/orphanages/create" className="create-orphanage">
					<FiPlus size={32} color='#FFF' />
			</Link>

		</div>
	);
}

export default OrphanagesMap;