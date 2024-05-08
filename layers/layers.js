var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ukpnlivefaultsreceive_1 = new ol.format.GeoJSON();
var features_ukpnlivefaultsreceive_1 = format_ukpnlivefaultsreceive_1.readFeatures(json_ukpnlivefaultsreceive_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ukpnlivefaultsreceive_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ukpnlivefaultsreceive_1.addFeatures(features_ukpnlivefaultsreceive_1);
var lyr_ukpnlivefaultsreceive_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ukpnlivefaultsreceive_1, 
                style: style_ukpnlivefaultsreceive_1,
                popuplayertitle: "ukpn-live-faults receive",
                interactive: true,
                title: '<img src="styles/legend/ukpnlivefaultsreceive_1.png" /> ukpn-live-faults receive'
            });
var format_ukpnlivefaults_2 = new ol.format.GeoJSON();
var features_ukpnlivefaults_2 = format_ukpnlivefaults_2.readFeatures(json_ukpnlivefaults_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ukpnlivefaults_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ukpnlivefaults_2.addFeatures(features_ukpnlivefaults_2);
var lyr_ukpnlivefaults_2 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_ukpnlivefaults_2, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'ukpn-live-faults'
            });
var format_UKPN33kvoverheadlines_3 = new ol.format.GeoJSON();
var features_UKPN33kvoverheadlines_3 = format_UKPN33kvoverheadlines_3.readFeatures(json_UKPN33kvoverheadlines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UKPN33kvoverheadlines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UKPN33kvoverheadlines_3.addFeatures(features_UKPN33kvoverheadlines_3);
var lyr_UKPN33kvoverheadlines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UKPN33kvoverheadlines_3, 
                style: style_UKPN33kvoverheadlines_3,
                popuplayertitle: "UKPN-33kv-overhead-lines",
                interactive: true,
                title: '<img src="styles/legend/UKPN33kvoverheadlines_3.png" /> UKPN-33kv-overhead-lines'
            });
var format_UKPN132kvoverheadlines_4 = new ol.format.GeoJSON();
var features_UKPN132kvoverheadlines_4 = format_UKPN132kvoverheadlines_4.readFeatures(json_UKPN132kvoverheadlines_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UKPN132kvoverheadlines_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UKPN132kvoverheadlines_4.addFeatures(features_UKPN132kvoverheadlines_4);
var lyr_UKPN132kvoverheadlines_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UKPN132kvoverheadlines_4, 
                style: style_UKPN132kvoverheadlines_4,
                popuplayertitle: "UKPN-132kv-overhead-lines",
                interactive: true,
                title: '<img src="styles/legend/UKPN132kvoverheadlines_4.png" /> UKPN-132kv-overhead-lines'
            });
var format_UKPNlvoverheadlinesshapefile_5 = new ol.format.GeoJSON();
var features_UKPNlvoverheadlinesshapefile_5 = format_UKPNlvoverheadlinesshapefile_5.readFeatures(json_UKPNlvoverheadlinesshapefile_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UKPNlvoverheadlinesshapefile_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UKPNlvoverheadlinesshapefile_5.addFeatures(features_UKPNlvoverheadlinesshapefile_5);
var lyr_UKPNlvoverheadlinesshapefile_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UKPNlvoverheadlinesshapefile_5, 
                style: style_UKPNlvoverheadlinesshapefile_5,
                popuplayertitle: "UKPN-lv-overhead-lines-shapefile",
                interactive: true,
                title: '<img src="styles/legend/UKPNlvoverheadlinesshapefile_5.png" /> UKPN-lv-overhead-lines-shapefile'
            });
var format_windwpeed_6 = new ol.format.GeoJSON();
var features_windwpeed_6 = format_windwpeed_6.readFeatures(json_windwpeed_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_windwpeed_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_windwpeed_6.addFeatures(features_windwpeed_6);
var lyr_windwpeed_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_windwpeed_6, 
                style: style_windwpeed_6,
                popuplayertitle: "windwpeed",
                interactive: true,
                title: '<img src="styles/legend/windwpeed_6.png" /> windwpeed'
            });
var group_OHLs = new ol.layer.Group({
                                layers: [lyr_UKPN33kvoverheadlines_3,lyr_UKPN132kvoverheadlines_4,],
                                fold: "open",
                                title: "OHLs"});
var group_polestowers = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "poles-towers"});
var group_primarysites = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "primary sites"});
var group_faults = new ol.layer.Group({
                                layers: [lyr_ukpnlivefaultsreceive_1,lyr_ukpnlivefaults_2,],
                                fold: "open",
                                title: "faults"});

lyr_OpenStreetMap_0.setVisible(true);lyr_ukpnlivefaultsreceive_1.setVisible(true);lyr_ukpnlivefaults_2.setVisible(true);lyr_UKPN33kvoverheadlines_3.setVisible(true);lyr_UKPN132kvoverheadlines_4.setVisible(true);lyr_UKPNlvoverheadlinesshapefile_5.setVisible(true);lyr_windwpeed_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_faults,group_OHLs,lyr_UKPNlvoverheadlinesshapefile_5,lyr_windwpeed_6];
lyr_ukpnlivefaultsreceive_1.set('fieldAliases', {'incidentreference': 'incidentreference', 'powercuttype': 'powercuttype', 'creationdatetime': 'creationdatetime', 'nocallsreported': 'nocallsreported', 'incidentscount': 'incidentscount', 'nocustomeraffected': 'nocustomeraffected', 'postcodesaffected': 'postcodesaffected', 'restoredincidents': 'restoredincidents', 'unplannedincidents': 'unplannedincidents', 'plannedincidents': 'plannedincidents', 'incidenttypetbcestimatedfriendlydescription': 'incidenttypetbcestimatedfriendlydescription', 'incidentdescription': 'incidentdescription', 'fullpostcodedata': 'fullpostcodedata', 'incidentcategorycustomerfriendlydescription': 'incidentcategorycustomerfriendlydescription', 'incidentcategory': 'incidentcategory', 'incidenttypename': 'incidenttypename', 'incidenttype': 'incidenttype', 'incidentpriority': 'incidentpriority', 'statusid': 'statusid', 'restoreddatetime': 'restoreddatetime', 'planneddate': 'planneddate', 'receiveddate': 'receiveddate', 'noplannedcustomers': 'noplannedcustomers', 'plannedincidentreason': 'plannedincidentreason', 'message': 'message', 'mainmessage': 'mainmessage', 'geopoint': 'geopoint', 'estimatedrestorationdate': 'estimatedrestorationdate', });
lyr_UKPN33kvoverheadlines_3.set('fieldAliases', {'geo_point_2d': 'geo_point_2d', 'cmr': 'cmr', 'dno': 'dno', 'voltage': 'voltage', 'rag': 'rag', 'routename': 'routename', 'constraint': 'constraint', 'sourced_dn': 'sourced_dn', });
lyr_UKPN132kvoverheadlines_4.set('fieldAliases', {'geo_point_2d': 'geo_point_2d', 'voltage': 'voltage', 'dno': 'dno', 'ob_class': 'ob_class', });
lyr_UKPNlvoverheadlinesshapefile_5.set('fieldAliases', {'geo_point_2d': 'geo_point_2d', 'geo_shape': 'geo_shape', 'zustand': 'zustand', 'ob_class': 'ob_class', 'dno': 'dno', });
lyr_windwpeed_6.set('fieldAliases', {'name': 'name', 'lat': 'lat', 'lon': 'lon', 'datetime': 'datetime', 'temp': 'temp', 'feelslike': 'feelslike', 'dew': 'dew', 'humidity': 'humidity', 'precip': 'precip', 'precipprob': 'precipprob', 'preciptype': 'preciptype', 'snow': 'snow', 'snowdepth': 'snowdepth', 'windgust': 'windgust', 'windspeed': 'windspeed', 'winddir': 'winddir', 'sealevelpressure': 'sealevelpressure', 'cloudcover': 'cloudcover', 'visibility': 'visibility', 'solarradiation': 'solarradiation', 'solarenergy': 'solarenergy', 'uvindex': 'uvindex', 'severerisk': 'severerisk', 'conditions': 'conditions', 'icon': 'icon', 'stations': 'stations', 'field_27': 'field_27', 'name_1': 'name_1', 'position': 'position', 'lat_1': 'lat_1', 'lon_1': 'lon_1', });
lyr_ukpnlivefaultsreceive_1.set('fieldImages', {'incidentreference': 'TextEdit', 'powercuttype': 'TextEdit', 'creationdatetime': 'DateTime', 'nocallsreported': 'Range', 'incidentscount': 'Range', 'nocustomeraffected': 'Range', 'postcodesaffected': 'TextEdit', 'restoredincidents': 'TextEdit', 'unplannedincidents': 'TextEdit', 'plannedincidents': 'TextEdit', 'incidenttypetbcestimatedfriendlydescription': 'TextEdit', 'incidentdescription': 'TextEdit', 'fullpostcodedata': 'TextEdit', 'incidentcategorycustomerfriendlydescription': 'TextEdit', 'incidentcategory': 'TextEdit', 'incidenttypename': 'TextEdit', 'incidenttype': 'Range', 'incidentpriority': 'Range', 'statusid': 'Range', 'restoreddatetime': 'DateTime', 'planneddate': 'DateTime', 'receiveddate': 'DateTime', 'noplannedcustomers': 'Range', 'plannedincidentreason': 'TextEdit', 'message': 'TextEdit', 'mainmessage': 'TextEdit', 'geopoint': 'TextEdit', 'estimatedrestorationdate': 'DateTime', });
lyr_UKPN33kvoverheadlines_3.set('fieldImages', {'geo_point_2d': '', 'cmr': '', 'dno': '', 'voltage': '', 'rag': '', 'routename': '', 'constraint': '', 'sourced_dn': '', });
lyr_UKPN132kvoverheadlines_4.set('fieldImages', {'geo_point_2d': '', 'voltage': '', 'dno': '', 'ob_class': '', });
lyr_UKPNlvoverheadlinesshapefile_5.set('fieldImages', {'geo_point_2d': '', 'geo_shape': '', 'zustand': '', 'ob_class': '', 'dno': '', });
lyr_windwpeed_6.set('fieldImages', {'name': '', 'lat': '', 'lon': '', 'datetime': '', 'temp': '', 'feelslike': '', 'dew': '', 'humidity': '', 'precip': '', 'precipprob': '', 'preciptype': '', 'snow': '', 'snowdepth': '', 'windgust': '', 'windspeed': '', 'winddir': '', 'sealevelpressure': '', 'cloudcover': '', 'visibility': '', 'solarradiation': '', 'solarenergy': '', 'uvindex': '', 'severerisk': '', 'conditions': '', 'icon': '', 'stations': '', 'field_27': '', 'name_1': '', 'position': '', 'lat_1': '', 'lon_1': '', });
lyr_ukpnlivefaultsreceive_1.set('fieldLabels', {'incidentreference': 'no label', 'powercuttype': 'no label', 'creationdatetime': 'no label', 'nocallsreported': 'no label', 'incidentscount': 'no label', 'nocustomeraffected': 'no label', 'postcodesaffected': 'no label', 'restoredincidents': 'no label', 'unplannedincidents': 'no label', 'plannedincidents': 'no label', 'incidenttypetbcestimatedfriendlydescription': 'no label', 'incidentdescription': 'no label', 'fullpostcodedata': 'no label', 'incidentcategorycustomerfriendlydescription': 'no label', 'incidentcategory': 'no label', 'incidenttypename': 'no label', 'incidenttype': 'no label', 'incidentpriority': 'no label', 'statusid': 'no label', 'restoreddatetime': 'no label', 'planneddate': 'no label', 'receiveddate': 'no label', 'noplannedcustomers': 'no label', 'plannedincidentreason': 'no label', 'message': 'no label', 'mainmessage': 'no label', 'geopoint': 'no label', 'estimatedrestorationdate': 'no label', });
lyr_UKPN33kvoverheadlines_3.set('fieldLabels', {'geo_point_2d': 'no label', 'cmr': 'no label', 'dno': 'no label', 'voltage': 'no label', 'rag': 'no label', 'routename': 'no label', 'constraint': 'no label', 'sourced_dn': 'no label', });
lyr_UKPN132kvoverheadlines_4.set('fieldLabels', {'geo_point_2d': 'no label', 'voltage': 'no label', 'dno': 'no label', 'ob_class': 'no label', });
lyr_UKPNlvoverheadlinesshapefile_5.set('fieldLabels', {'geo_point_2d': 'no label', 'geo_shape': 'no label', 'zustand': 'no label', 'ob_class': 'no label', 'dno': 'no label', });
lyr_windwpeed_6.set('fieldLabels', {'name': 'no label', 'lat': 'no label', 'lon': 'no label', 'datetime': 'no label', 'temp': 'no label', 'feelslike': 'no label', 'dew': 'no label', 'humidity': 'no label', 'precip': 'no label', 'precipprob': 'no label', 'preciptype': 'no label', 'snow': 'no label', 'snowdepth': 'no label', 'windgust': 'no label', 'windspeed': 'no label', 'winddir': 'no label', 'sealevelpressure': 'no label', 'cloudcover': 'no label', 'visibility': 'no label', 'solarradiation': 'no label', 'solarenergy': 'no label', 'uvindex': 'no label', 'severerisk': 'no label', 'conditions': 'no label', 'icon': 'no label', 'stations': 'no label', 'field_27': 'no label', 'name_1': 'no label', 'position': 'no label', 'lat_1': 'no label', 'lon_1': 'no label', });
lyr_windwpeed_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});