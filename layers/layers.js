var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AP2025Aree_Permeabili_Comune_di_Napoli_1 = new ol.format.GeoJSON();
var features_AP2025Aree_Permeabili_Comune_di_Napoli_1 = format_AP2025Aree_Permeabili_Comune_di_Napoli_1.readFeatures(json_AP2025Aree_Permeabili_Comune_di_Napoli_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AP2025Aree_Permeabili_Comune_di_Napoli_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AP2025Aree_Permeabili_Comune_di_Napoli_1.addFeatures(features_AP2025Aree_Permeabili_Comune_di_Napoli_1);
var lyr_AP2025Aree_Permeabili_Comune_di_Napoli_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AP2025Aree_Permeabili_Comune_di_Napoli_1, 
                style: style_AP2025Aree_Permeabili_Comune_di_Napoli_1,
                popuplayertitle: 'AP2025 Aree_Permeabili_Comune_di_Napoli',
                interactive: true,
    title: 'AP2025 Aree_Permeabili_Comune_di_Napoli<br />\
    <img src="styles/legend/AP2025Aree_Permeabili_Comune_di_Napoli_1_0.png" /> parco centrale<br />\
    <img src="styles/legend/AP2025Aree_Permeabili_Comune_di_Napoli_1_1.png" /> parco municipale<br />\
    <img src="styles/legend/AP2025Aree_Permeabili_Comune_di_Napoli_1_2.png" /> aiuola municipale<br />\
    <img src="styles/legend/AP2025Aree_Permeabili_Comune_di_Napoli_1_3.png" /> verde scolastico<br />\
    <img src="styles/legend/AP2025Aree_Permeabili_Comune_di_Napoli_1_4.png" /> verde stradale<br />\
    <img src="styles/legend/AP2025Aree_Permeabili_Comune_di_Napoli_1_5.png" /> aree sportive<br />\
    <img src="styles/legend/AP2025Aree_Permeabili_Comune_di_Napoli_1_6.png" /> cimitero centrale<br />\
    <img src="styles/legend/AP2025Aree_Permeabili_Comune_di_Napoli_1_7.png" /> Aree mercatali<br />\
    <img src="styles/legend/AP2025Aree_Permeabili_Comune_di_Napoli_1_8.png" /> cimitero municipale<br />\
    <img src="styles/legend/AP2025Aree_Permeabili_Comune_di_Napoli_1_9.png" /> altro<br />\
    <img src="styles/legend/AP2025Aree_Permeabili_Comune_di_Napoli_1_10.png" /> parchi pubblici non comunali<br />\
    <img src="styles/legend/AP2025Aree_Permeabili_Comune_di_Napoli_1_11.png" /> <br />' });
var group_PARCHIMUNICIPALI = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'PARCHI MUNICIPALI'});

lyr_GoogleSatellite_0.setVisible(true);lyr_AP2025Aree_Permeabili_Comune_di_Napoli_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AP2025Aree_Permeabili_Comune_di_Napoli_1];
lyr_AP2025Aree_Permeabili_Comune_di_Napoli_1.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'DESCRIPTIO': 'DESCRIPTIO', 'MUN': 'MUN', 'name group': 'name group', 'definizion': 'definizion', 'piu\' info': 'piu\' info', ' sup mq': ' sup mq', });
lyr_AP2025Aree_Permeabili_Comune_di_Napoli_1.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'DESCRIPTIO': 'ValueMap', 'MUN': 'ValueMap', 'name group': 'TextEdit', 'definizion': 'TextEdit', 'piu\' info': 'TextEdit', ' sup mq': 'TextEdit', });
lyr_AP2025Aree_Permeabili_Comune_di_Napoli_1.set('fieldLabels', {'id': 'inline label - always visible', 'NAME': 'inline label - always visible', 'DESCRIPTIO': 'inline label - always visible', 'MUN': 'inline label - always visible', 'name group': 'inline label - always visible', 'definizion': 'no label', 'piu\' info': 'inline label - always visible', ' sup mq': 'inline label - always visible', });
lyr_AP2025Aree_Permeabili_Comune_di_Napoli_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});