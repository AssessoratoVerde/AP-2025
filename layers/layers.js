var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AP2025_aggiornamento20novembre_1 = new ol.format.GeoJSON();
var features_AP2025_aggiornamento20novembre_1 = format_AP2025_aggiornamento20novembre_1.readFeatures(json_AP2025_aggiornamento20novembre_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AP2025_aggiornamento20novembre_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AP2025_aggiornamento20novembre_1.addFeatures(features_AP2025_aggiornamento20novembre_1);
var lyr_AP2025_aggiornamento20novembre_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AP2025_aggiornamento20novembre_1, 
                style: style_AP2025_aggiornamento20novembre_1,
                popuplayertitle: 'AP2025_aggiornamento 20 novembre',
                interactive: true,
    title: 'AP2025_aggiornamento 20 novembre<br />\
    <img src="styles/legend/AP2025_aggiornamento20novembre_1_0.png" /> aiuola municipale<br />\
    <img src="styles/legend/AP2025_aggiornamento20novembre_1_1.png" /> Aree mercatali<br />\
    <img src="styles/legend/AP2025_aggiornamento20novembre_1_2.png" /> cimitero centrale<br />\
    <img src="styles/legend/AP2025_aggiornamento20novembre_1_3.png" /> cimitero municipale<br />\
    <img src="styles/legend/AP2025_aggiornamento20novembre_1_4.png" /> edilizia sportiva<br />\
    <img src="styles/legend/AP2025_aggiornamento20novembre_1_5.png" /> parchi pubblici non comunali<br />\
    <img src="styles/legend/AP2025_aggiornamento20novembre_1_6.png" /> parco centrale<br />\
    <img src="styles/legend/AP2025_aggiornamento20novembre_1_7.png" /> parco municipale<br />\
    <img src="styles/legend/AP2025_aggiornamento20novembre_1_8.png" /> patrimonio<br />\
    <img src="styles/legend/AP2025_aggiornamento20novembre_1_9.png" /> verde scolastico<br />\
    <img src="styles/legend/AP2025_aggiornamento20novembre_1_10.png" /> verde stradale<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_AP2025_aggiornamento20novembre_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AP2025_aggiornamento20novembre_1];
lyr_AP2025_aggiornamento20novembre_1.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'DESCRIPTIO': 'DESCRIPTIO', 'MUN': 'MUN', 'name group': 'name group', 'definizion': 'definizion', 'piu\' info': 'piu\' info', ' sup mq': ' sup mq', });
lyr_AP2025_aggiornamento20novembre_1.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'DESCRIPTIO': 'ValueMap', 'MUN': 'TextEdit', 'name group': 'TextEdit', 'definizion': 'TextEdit', 'piu\' info': 'TextEdit', ' sup mq': 'TextEdit', });
lyr_AP2025_aggiornamento20novembre_1.set('fieldLabels', {'id': 'header label - always visible', 'NAME': 'inline label - always visible', 'DESCRIPTIO': 'inline label - always visible', 'MUN': 'inline label - always visible', 'name group': 'inline label - always visible', 'definizion': 'inline label - always visible', 'piu\' info': 'inline label - always visible', ' sup mq': 'inline label - always visible', });
lyr_AP2025_aggiornamento20novembre_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});