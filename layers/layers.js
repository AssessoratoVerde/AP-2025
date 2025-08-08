var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AP2025_aggiornamento5agosto_1 = new ol.format.GeoJSON();
var features_AP2025_aggiornamento5agosto_1 = format_AP2025_aggiornamento5agosto_1.readFeatures(json_AP2025_aggiornamento5agosto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AP2025_aggiornamento5agosto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AP2025_aggiornamento5agosto_1.addFeatures(features_AP2025_aggiornamento5agosto_1);
var lyr_AP2025_aggiornamento5agosto_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AP2025_aggiornamento5agosto_1, 
                style: style_AP2025_aggiornamento5agosto_1,
                popuplayertitle: 'AP2025_aggiornamento 5 agosto',
                interactive: true,
    title: 'AP2025_aggiornamento 5 agosto<br />\
    <img src="styles/legend/AP2025_aggiornamento5agosto_1_0.png" /> aiuola municipale<br />\
    <img src="styles/legend/AP2025_aggiornamento5agosto_1_1.png" /> Aree mercatali<br />\
    <img src="styles/legend/AP2025_aggiornamento5agosto_1_2.png" /> cimitero centrale<br />\
    <img src="styles/legend/AP2025_aggiornamento5agosto_1_3.png" /> cimitero municipale<br />\
    <img src="styles/legend/AP2025_aggiornamento5agosto_1_4.png" /> edilizia sportiva<br />\
    <img src="styles/legend/AP2025_aggiornamento5agosto_1_5.png" /> parchi pubblici non comunali<br />\
    <img src="styles/legend/AP2025_aggiornamento5agosto_1_6.png" /> parco centrale<br />\
    <img src="styles/legend/AP2025_aggiornamento5agosto_1_7.png" /> parco municipale<br />\
    <img src="styles/legend/AP2025_aggiornamento5agosto_1_8.png" /> patrimonio<br />\
    <img src="styles/legend/AP2025_aggiornamento5agosto_1_9.png" /> verde scolastico<br />\
    <img src="styles/legend/AP2025_aggiornamento5agosto_1_10.png" /> verde stradale<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_AP2025_aggiornamento5agosto_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_AP2025_aggiornamento5agosto_1];
lyr_AP2025_aggiornamento5agosto_1.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'DESCRIPTIO': 'DESCRIPTIO', 'MUN': 'MUN', 'name group': 'name group', 'definizion': 'definizion', 'piu\' info': 'piu\' info', ' sup mq': ' sup mq', });
lyr_AP2025_aggiornamento5agosto_1.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'DESCRIPTIO': 'ValueMap', 'MUN': 'TextEdit', 'name group': 'TextEdit', 'definizion': 'TextEdit', 'piu\' info': 'TextEdit', ' sup mq': 'TextEdit', });
lyr_AP2025_aggiornamento5agosto_1.set('fieldLabels', {'id': 'inline label - always visible', 'NAME': 'hidden field', 'DESCRIPTIO': 'inline label - always visible', 'MUN': 'inline label - always visible', 'name group': 'inline label - always visible', 'definizion': 'inline label - always visible', 'piu\' info': 'inline label - always visible', ' sup mq': 'inline label - always visible', });
lyr_AP2025_aggiornamento5agosto_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});