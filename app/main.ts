import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import Recenter from "./custom_widgets/Recenter"

const map = new EsriMap({
  basemap: "streets"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12
});

const recenter = new Recenter(
  {view: view, initialCenter: [-100.33, 43.69]
}); 

view.ui.add(recenter, 'top-right');