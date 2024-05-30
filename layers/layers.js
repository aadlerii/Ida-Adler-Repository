var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HBF_85817_geo_uHBF_85817_geo_updated_1 = new ol.format.GeoJSON();
var features_HBF_85817_geo_uHBF_85817_geo_updated_1 = format_HBF_85817_geo_uHBF_85817_geo_updated_1.readFeatures(json_HBF_85817_geo_uHBF_85817_geo_updated_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HBF_85817_geo_uHBF_85817_geo_updated_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HBF_85817_geo_uHBF_85817_geo_updated_1.addFeatures(features_HBF_85817_geo_uHBF_85817_geo_updated_1);
var lyr_HBF_85817_geo_uHBF_85817_geo_updated_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HBF_85817_geo_uHBF_85817_geo_updated_1, 
                style: style_HBF_85817_geo_uHBF_85817_geo_updated_1,
                popuplayertitle: "HBF_85817_geo_u HBF_85817_geo_updated",
                interactive: true,
                    title: '<img src="styles/legend/HBF_85817_geo_uHBF_85817_geo_updated_1.png" /> HBF_85817_geo_u HBF_85817_geo_updated'
                });
var format_grid2Squrrels_2 = new ol.format.GeoJSON();
var features_grid2Squrrels_2 = format_grid2Squrrels_2.readFeatures(json_grid2Squrrels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grid2Squrrels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grid2Squrrels_2.addFeatures(features_grid2Squrrels_2);
var lyr_grid2Squrrels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_grid2Squrrels_2, 
                style: style_grid2Squrrels_2,
                popuplayertitle: "grid2Squrrels",
                interactive: true,
    title: 'grid2Squrrels<br />\
    <img src="styles/legend/grid2Squrrels_2_0.png" /> 1 - 22<br />\
    <img src="styles/legend/grid2Squrrels_2_1.png" /> 22 - 63<br />\
    <img src="styles/legend/grid2Squrrels_2_2.png" /> 63 - 135<br />\
    <img src="styles/legend/grid2Squrrels_2_3.png" /> 135 - 243<br />\
    <img src="styles/legend/grid2Squrrels_2_4.png" /> 243 - 481<br />\
    <img src="styles/legend/grid2Squrrels_2_5.png" /> 481 - 817<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_HBF_85817_geo_uHBF_85817_geo_updated_1.setVisible(true);lyr_grid2Squrrels_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_HBF_85817_geo_uHBF_85817_geo_updated_1,lyr_grid2Squrrels_2];
lyr_HBF_85817_geo_uHBF_85817_geo_updated_1.set('fieldAliases', {'fid': 'fid', 'taxonomic_order': 'taxonomic_order', 'formatted_taxon_name': 'formatted_taxon_name', 'abundance_verbatim': 'abundance_verbatim', 'formatted_date_time': 'formatted_date_time', 'country': 'country', 'bio_province_interpreted': 'bio_province_interpreted', 'locality': 'locality', 'collection_name': 'collection_name', 'team': 'team', 'year': 'year', 'datetime': 'datetime', 'date': 'date', });
lyr_grid2Squrrels_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'NUMPOINTS': 'NUMPOINTS', });
lyr_HBF_85817_geo_uHBF_85817_geo_updated_1.set('fieldImages', {'fid': 'TextEdit', 'taxonomic_order': 'TextEdit', 'formatted_taxon_name': 'TextEdit', 'abundance_verbatim': 'TextEdit', 'formatted_date_time': 'TextEdit', 'country': 'TextEdit', 'bio_province_interpreted': 'TextEdit', 'locality': 'TextEdit', 'collection_name': 'TextEdit', 'team': 'TextEdit', 'year': 'TextEdit', 'datetime': 'DateTime', 'date': 'DateTime', });
lyr_grid2Squrrels_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_HBF_85817_geo_uHBF_85817_geo_updated_1.set('fieldLabels', {'fid': 'no label', 'taxonomic_order': 'no label', 'formatted_taxon_name': 'no label', 'abundance_verbatim': 'no label', 'formatted_date_time': 'no label', 'country': 'no label', 'bio_province_interpreted': 'no label', 'locality': 'no label', 'collection_name': 'no label', 'team': 'no label', 'year': 'no label', 'datetime': 'no label', 'date': 'no label', });
lyr_grid2Squrrels_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'NUMPOINTS': 'no label', });
lyr_grid2Squrrels_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});