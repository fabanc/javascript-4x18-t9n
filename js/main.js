define(["require", "exports", "tslib", "esri/Map", "esri/views/MapView", "./custom_widgets/Recenter"], function (require, exports, tslib_1, Map_1, MapView_1, Recenter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Map_1 = tslib_1.__importDefault(Map_1);
    MapView_1 = tslib_1.__importDefault(MapView_1);
    Recenter_1 = tslib_1.__importDefault(Recenter_1);
    var map = new Map_1.default({
        basemap: "streets"
    });
    var view = new MapView_1.default({
        map: map,
        container: "viewDiv",
        center: [-118.244, 34.052],
        zoom: 12
    });
    var recenter = new Recenter_1.default({ view: view, initialCenter: [-100.33, 43.69]
    });
    view.ui.add(recenter, 'top-right');
});
//# sourceMappingURL=main.js.map