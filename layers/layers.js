ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([608826.746785, 9059985.171942, 809079.720842, 9167428.341038]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var lyr_Hillshade_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hillshade",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hillshade_2.png",
    attributions: ' ',
                                projection: 'EPSG:32749',
                                alwaysInRange: true,
                                imageExtent: [674457.669400, 9115193.978272, 706689.911988, 9141344.194703]
                            })
                        });
var format_KomoditasUtamaDesaKelurahan_3 = new ol.format.GeoJSON();
var features_KomoditasUtamaDesaKelurahan_3 = format_KomoditasUtamaDesaKelurahan_3.readFeatures(json_KomoditasUtamaDesaKelurahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KomoditasUtamaDesaKelurahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KomoditasUtamaDesaKelurahan_3.addFeatures(features_KomoditasUtamaDesaKelurahan_3);
var lyr_KomoditasUtamaDesaKelurahan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KomoditasUtamaDesaKelurahan_3, 
                style: style_KomoditasUtamaDesaKelurahan_3,
                interactive: true,
    title: 'Komoditas Utama Desa/Kelurahan<br />\
    <img src="styles/legend/KomoditasUtamaDesaKelurahan_3_0.png" /> Durian<br />\
    <img src="styles/legend/KomoditasUtamaDesaKelurahan_3_1.png" /> Jahe Merah<br />\
    <img src="styles/legend/KomoditasUtamaDesaKelurahan_3_2.png" /> Kopi<br />\
    <img src="styles/legend/KomoditasUtamaDesaKelurahan_3_3.png" /> Mawar<br />\
    <img src="styles/legend/KomoditasUtamaDesaKelurahan_3_4.png" /> Padi<br />\
    <img src="styles/legend/KomoditasUtamaDesaKelurahan_3_5.png" /> Perdagangan/Jasa<br />\
    <img src="styles/legend/KomoditasUtamaDesaKelurahan_3_6.png" /> Susu<br />\
    <img src="styles/legend/KomoditasUtamaDesaKelurahan_3_7.png" /> Tebu<br />\
    <img src="styles/legend/KomoditasUtamaDesaKelurahan_3_8.png" /> Teh<br />\
    <img src="styles/legend/KomoditasUtamaDesaKelurahan_3_9.png" /> Ubi Kayu<br />\
    <img src="styles/legend/KomoditasUtamaDesaKelurahan_3_10.png" /> <br />'
        });
var format_KepadatanPendudukperHektar2022_4 = new ol.format.GeoJSON();
var features_KepadatanPendudukperHektar2022_4 = format_KepadatanPendudukperHektar2022_4.readFeatures(json_KepadatanPendudukperHektar2022_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KepadatanPendudukperHektar2022_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KepadatanPendudukperHektar2022_4.addFeatures(features_KepadatanPendudukperHektar2022_4);
var lyr_KepadatanPendudukperHektar2022_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KepadatanPendudukperHektar2022_4, 
                style: style_KepadatanPendudukperHektar2022_4,
                interactive: true,
    title: 'Kepadatan Penduduk per Hektar 2022<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2022_4_0.png" /> 1 - 8.3<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2022_4_1.png" /> 8.3 - 15.6<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2022_4_2.png" /> 15.6 - 22.9<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2022_4_3.png" /> 22.9 - 30.2<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2022_4_4.png" /> 30.2 - 37.5<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2022_4_5.png" /> 37.5 - 44.8<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2022_4_6.png" /> 44.8 - 52.1<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2022_4_7.png" /> 52.1 - 59.4<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2022_4_8.png" /> 59.4 - 66.7<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2022_4_9.png" /> 66.7 - 74<br />'
        });
var format_JumlahPendudukperHektar2022_5 = new ol.format.GeoJSON();
var features_JumlahPendudukperHektar2022_5 = format_JumlahPendudukperHektar2022_5.readFeatures(json_JumlahPendudukperHektar2022_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JumlahPendudukperHektar2022_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JumlahPendudukperHektar2022_5.addFeatures(features_JumlahPendudukperHektar2022_5);
var lyr_JumlahPendudukperHektar2022_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JumlahPendudukperHektar2022_5, 
                style: style_JumlahPendudukperHektar2022_5,
                interactive: true,
    title: 'Jumlah Penduduk per Hektar 2022<br />\
    <img src="styles/legend/JumlahPendudukperHektar2022_5_0.png" /> 1264 - 3094<br />\
    <img src="styles/legend/JumlahPendudukperHektar2022_5_1.png" /> 3094 - 4923<br />\
    <img src="styles/legend/JumlahPendudukperHektar2022_5_2.png" /> 4923 - 6753<br />\
    <img src="styles/legend/JumlahPendudukperHektar2022_5_3.png" /> 6753 - 8583<br />\
    <img src="styles/legend/JumlahPendudukperHektar2022_5_4.png" /> 8583 - 10413<br />\
    <img src="styles/legend/JumlahPendudukperHektar2022_5_5.png" /> 10413 - 12242<br />\
    <img src="styles/legend/JumlahPendudukperHektar2022_5_6.png" /> 12242 - 14072<br />\
    <img src="styles/legend/JumlahPendudukperHektar2022_5_7.png" /> 14072 - 15902<br />\
    <img src="styles/legend/JumlahPendudukperHektar2022_5_8.png" /> 15902 - 17731<br />\
    <img src="styles/legend/JumlahPendudukperHektar2022_5_9.png" /> 17731 - 19561<br />'
        });
var format_KepadatanPendudukperHektar2017_6 = new ol.format.GeoJSON();
var features_KepadatanPendudukperHektar2017_6 = format_KepadatanPendudukperHektar2017_6.readFeatures(json_KepadatanPendudukperHektar2017_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KepadatanPendudukperHektar2017_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KepadatanPendudukperHektar2017_6.addFeatures(features_KepadatanPendudukperHektar2017_6);
var lyr_KepadatanPendudukperHektar2017_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KepadatanPendudukperHektar2017_6, 
                style: style_KepadatanPendudukperHektar2017_6,
                interactive: true,
    title: 'Kepadatan Penduduk per Hektar 2017<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2017_6_0.png" /> 1 - 9.2<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2017_6_1.png" /> 9.2 - 17.4<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2017_6_2.png" /> 17.4 - 25.6<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2017_6_3.png" /> 25.6 - 33.8<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2017_6_4.png" /> 33.8 - 42<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2017_6_5.png" /> 42 - 50.2<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2017_6_6.png" /> 50.2 - 58.4<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2017_6_7.png" /> 58.4 - 66.6<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2017_6_8.png" /> 66.6 - 74.8<br />\
    <img src="styles/legend/KepadatanPendudukperHektar2017_6_9.png" /> 74.8 - 83<br />'
        });
var format_JumlahPendudukperHektar2017_7 = new ol.format.GeoJSON();
var features_JumlahPendudukperHektar2017_7 = format_JumlahPendudukperHektar2017_7.readFeatures(json_JumlahPendudukperHektar2017_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JumlahPendudukperHektar2017_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JumlahPendudukperHektar2017_7.addFeatures(features_JumlahPendudukperHektar2017_7);
var lyr_JumlahPendudukperHektar2017_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JumlahPendudukperHektar2017_7, 
                style: style_JumlahPendudukperHektar2017_7,
                interactive: true,
    title: 'Jumlah Penduduk per Hektar 2017<br />\
    <img src="styles/legend/JumlahPendudukperHektar2017_7_0.png" /> 1326 - 2921<br />\
    <img src="styles/legend/JumlahPendudukperHektar2017_7_1.png" /> 2921 - 4516<br />\
    <img src="styles/legend/JumlahPendudukperHektar2017_7_2.png" /> 4516 - 6111<br />\
    <img src="styles/legend/JumlahPendudukperHektar2017_7_3.png" /> 6111 - 7706<br />\
    <img src="styles/legend/JumlahPendudukperHektar2017_7_4.png" /> 7706 - 9302<br />\
    <img src="styles/legend/JumlahPendudukperHektar2017_7_5.png" /> 9302 - 10897<br />\
    <img src="styles/legend/JumlahPendudukperHektar2017_7_6.png" /> 10897 - 12492<br />\
    <img src="styles/legend/JumlahPendudukperHektar2017_7_7.png" /> 12492 - 14087<br />\
    <img src="styles/legend/JumlahPendudukperHektar2017_7_8.png" /> 14087 - 15682<br />\
    <img src="styles/legend/JumlahPendudukperHektar2017_7_9.png" /> 15682 - 17277<br />'
        });
var format_KotaMalang_8 = new ol.format.GeoJSON();
var features_KotaMalang_8 = format_KotaMalang_8.readFeatures(json_KotaMalang_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KotaMalang_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaMalang_8.addFeatures(features_KotaMalang_8);
var lyr_KotaMalang_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KotaMalang_8, 
                style: style_KotaMalang_8,
                interactive: true,
                title: '<img src="styles/legend/KotaMalang_8.png" /> Kota Malang'
            });
var format_KotaBatu_9 = new ol.format.GeoJSON();
var features_KotaBatu_9 = format_KotaBatu_9.readFeatures(json_KotaBatu_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KotaBatu_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBatu_9.addFeatures(features_KotaBatu_9);
var lyr_KotaBatu_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KotaBatu_9, 
                style: style_KotaBatu_9,
                interactive: true,
                title: '<img src="styles/legend/KotaBatu_9.png" /> Kota Batu'
            });
var format_KabupatenPasuruan_10 = new ol.format.GeoJSON();
var features_KabupatenPasuruan_10 = format_KabupatenPasuruan_10.readFeatures(json_KabupatenPasuruan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KabupatenPasuruan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabupatenPasuruan_10.addFeatures(features_KabupatenPasuruan_10);
var lyr_KabupatenPasuruan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KabupatenPasuruan_10, 
                style: style_KabupatenPasuruan_10,
                interactive: true,
                title: '<img src="styles/legend/KabupatenPasuruan_10.png" /> Kabupaten Pasuruan'
            });
var format_BatasKabupatenMalang_11 = new ol.format.GeoJSON();
var features_BatasKabupatenMalang_11 = format_BatasKabupatenMalang_11.readFeatures(json_BatasKabupatenMalang_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasKabupatenMalang_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupatenMalang_11.addFeatures(features_BatasKabupatenMalang_11);
var lyr_BatasKabupatenMalang_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKabupatenMalang_11, 
                style: style_BatasKabupatenMalang_11,
                interactive: true,
                title: '<img src="styles/legend/BatasKabupatenMalang_11.png" /> Batas Kabupaten Malang'
            });
var format_BatasKecamatanKabupatenMalang_12 = new ol.format.GeoJSON();
var features_BatasKecamatanKabupatenMalang_12 = format_BatasKecamatanKabupatenMalang_12.readFeatures(json_BatasKecamatanKabupatenMalang_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasKecamatanKabupatenMalang_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatanKabupatenMalang_12.addFeatures(features_BatasKecamatanKabupatenMalang_12);
var lyr_BatasKecamatanKabupatenMalang_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKecamatanKabupatenMalang_12, 
                style: style_BatasKecamatanKabupatenMalang_12,
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatanKabupatenMalang_12.png" /> Batas Kecamatan Kabupaten Malang'
            });
var format_Batas3KecamatanLawangSingosariJabung_13 = new ol.format.GeoJSON();
var features_Batas3KecamatanLawangSingosariJabung_13 = format_Batas3KecamatanLawangSingosariJabung_13.readFeatures(json_Batas3KecamatanLawangSingosariJabung_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Batas3KecamatanLawangSingosariJabung_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas3KecamatanLawangSingosariJabung_13.addFeatures(features_Batas3KecamatanLawangSingosariJabung_13);
var lyr_Batas3KecamatanLawangSingosariJabung_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas3KecamatanLawangSingosariJabung_13, 
                style: style_Batas3KecamatanLawangSingosariJabung_13,
                interactive: true,
    title: 'Batas 3 Kecamatan (Lawang, Singosari, Jabung)<br />\
    <img src="styles/legend/Batas3KecamatanLawangSingosariJabung_13_0.png" /> KECAMATAN JABUNG<br />\
    <img src="styles/legend/Batas3KecamatanLawangSingosariJabung_13_1.png" /> KECAMATAN LAWANG<br />\
    <img src="styles/legend/Batas3KecamatanLawangSingosariJabung_13_2.png" /> KECAMATAN SINGOSARI<br />\
    <img src="styles/legend/Batas3KecamatanLawangSingosariJabung_13_3.png" /> <br />'
        });
var format_BatasDesaKelurahan_14 = new ol.format.GeoJSON();
var features_BatasDesaKelurahan_14 = format_BatasDesaKelurahan_14.readFeatures(json_BatasDesaKelurahan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasDesaKelurahan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaKelurahan_14.addFeatures(features_BatasDesaKelurahan_14);
var lyr_BatasDesaKelurahan_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasDesaKelurahan_14, 
                style: style_BatasDesaKelurahan_14,
                interactive: true,
    title: 'Batas Desa/Kelurahan<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_0.png" /> DESA ARDIMULYO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_1.png" /> DESA ARGOSARI<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_2.png" /> DESA BANJARARUM<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_3.png" /> DESA BATURETNO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_4.png" /> DESA BEDALI<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_5.png" /> DESA DENGKOL<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_6.png" /> DESA GADINGKEMBAR<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_7.png" /> DESA GUNUNGJATI<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_8.png" /> DESA GUNUNGREJO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_9.png" /> DESA JABUNG<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_10.png" /> DESA LOSARI<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_11.png" /> DESA KEMANTREN<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_12.png" /> DESA KEMIRI<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_13.png" /> DESA KENONGO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_14.png" /> DESA KETINDAN<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_15.png" /> DESA KLAMPOK<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_16.png" /> DESA LANGLANG<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_17.png" /> DESA MULYOARJO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_18.png" /> DESA NGADIREJO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_19.png" /> DESA PANDANSARI LOR<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_20.png" /> DESA PUWOASRI<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_21.png" /> DESA RANDUAGUNG<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_22.png" /> DESA SIDODADI<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_23.png" /> DESA SIDOLUHUR<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_24.png" /> DESA SIDOMULYO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_25.png" /> DESA SIDOREJO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_26.png" /> DESA SLAMPAREJO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_27.png" /> DESA SRIGADING<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_28.png" /> DESA SUKOLILO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_29.png" /> DESA SUKOPURO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_30.png" /> DESA SUMBERNGEPOH<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_31.png" /> DESA SUMBERPORONG<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_32.png" /> DESA TAJI<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_33.png" /> DESA TAMANHARJO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_34.png" /> DESA TOYOMARTO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_35.png" /> DESA TUNJUNGTIRTO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_36.png" /> DESA TURIREJO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_37.png" /> DESA WATUGEDE<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_38.png" /> KELURAHAN CANDIRENGGO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_39.png" /> KELURAHAN KALIREJO<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_40.png" /> KELURAHAN LAWANG<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_41.png" /> KELURAHAN PAGENTAN<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_42.png" /> DESA WONOREJO (LAWANG)<br />\
    <img src="styles/legend/BatasDesaKelurahan_14_43.png" /> DESA WONOREJO (SINGOSARI)<br />'
        });
var format_AksesJalan3Kecamatan_15 = new ol.format.GeoJSON();
var features_AksesJalan3Kecamatan_15 = format_AksesJalan3Kecamatan_15.readFeatures(json_AksesJalan3Kecamatan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_AksesJalan3Kecamatan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AksesJalan3Kecamatan_15.addFeatures(features_AksesJalan3Kecamatan_15);
var lyr_AksesJalan3Kecamatan_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AksesJalan3Kecamatan_15, 
                style: style_AksesJalan3Kecamatan_15,
                interactive: true,
    title: 'Akses Jalan 3 Kecamatan<br />\
    <img src="styles/legend/AksesJalan3Kecamatan_15_0.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/AksesJalan3Kecamatan_15_1.png" /> Jalan Lain<br />\
    <img src="styles/legend/AksesJalan3Kecamatan_15_2.png" /> Jalan Layang<br />\
    <img src="styles/legend/AksesJalan3Kecamatan_15_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/AksesJalan3Kecamatan_15_4.png" /> Jalan Setapak<br />\
    <img src="styles/legend/AksesJalan3Kecamatan_15_5.png" /> Jalan Tol Dua Jalur Dengan Pemisah Fisik<br />\
    <img src="styles/legend/AksesJalan3Kecamatan_15_6.png" /> <br />'
        });
var format_AliranSungai3Kecamatan_16 = new ol.format.GeoJSON();
var features_AliranSungai3Kecamatan_16 = format_AliranSungai3Kecamatan_16.readFeatures(json_AliranSungai3Kecamatan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_AliranSungai3Kecamatan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AliranSungai3Kecamatan_16.addFeatures(features_AliranSungai3Kecamatan_16);
var lyr_AliranSungai3Kecamatan_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AliranSungai3Kecamatan_16, 
                style: style_AliranSungai3Kecamatan_16,
                interactive: true,
                title: '<img src="styles/legend/AliranSungai3Kecamatan_16.png" /> Aliran Sungai 3 Kecamatan'
            });
var format_KantorPemerintahan_17 = new ol.format.GeoJSON();
var features_KantorPemerintahan_17 = format_KantorPemerintahan_17.readFeatures(json_KantorPemerintahan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KantorPemerintahan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorPemerintahan_17.addFeatures(features_KantorPemerintahan_17);
var lyr_KantorPemerintahan_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KantorPemerintahan_17, 
                style: style_KantorPemerintahan_17,
                interactive: true,
    title: 'Kantor Pemerintahan<br />\
    <img src="styles/legend/KantorPemerintahan_17_0.png" /> Kantor Camat<br />\
    <img src="styles/legend/KantorPemerintahan_17_1.png" /> Kantor Kepala Desa<br />\
    <img src="styles/legend/KantorPemerintahan_17_2.png" /> Kantor Lurah<br />\
    <img src="styles/legend/KantorPemerintahan_17_3.png" /> Kantor Polisi<br />\
    <img src="styles/legend/KantorPemerintahan_17_4.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Hillshade_2.setVisible(true);lyr_KomoditasUtamaDesaKelurahan_3.setVisible(true);lyr_KepadatanPendudukperHektar2022_4.setVisible(true);lyr_JumlahPendudukperHektar2022_5.setVisible(true);lyr_KepadatanPendudukperHektar2017_6.setVisible(true);lyr_JumlahPendudukperHektar2017_7.setVisible(true);lyr_KotaMalang_8.setVisible(true);lyr_KotaBatu_9.setVisible(true);lyr_KabupatenPasuruan_10.setVisible(true);lyr_BatasKabupatenMalang_11.setVisible(true);lyr_BatasKecamatanKabupatenMalang_12.setVisible(true);lyr_Batas3KecamatanLawangSingosariJabung_13.setVisible(true);lyr_BatasDesaKelurahan_14.setVisible(true);lyr_AksesJalan3Kecamatan_15.setVisible(true);lyr_AliranSungai3Kecamatan_16.setVisible(true);lyr_KantorPemerintahan_17.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_Hillshade_2,lyr_KomoditasUtamaDesaKelurahan_3,lyr_KepadatanPendudukperHektar2022_4,lyr_JumlahPendudukperHektar2022_5,lyr_KepadatanPendudukperHektar2017_6,lyr_JumlahPendudukperHektar2017_7,lyr_KotaMalang_8,lyr_KotaBatu_9,lyr_KabupatenPasuruan_10,lyr_BatasKabupatenMalang_11,lyr_BatasKecamatanKabupatenMalang_12,lyr_Batas3KecamatanLawangSingosariJabung_13,lyr_BatasDesaKelurahan_14,lyr_AksesJalan3Kecamatan_15,lyr_AliranSungai3Kecamatan_16,lyr_KantorPemerintahan_17];
lyr_KomoditasUtamaDesaKelurahan_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Area_Ha': 'Area_Ha', 'Komoditas': 'Komoditas', });
lyr_KepadatanPendudukperHektar2022_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Area_Ha': 'Area_Ha', 'Pdd_2022': 'Pdd_2022', 'M_Pdd_2022': 'M_Pdd_2022', 'F_Pdd_2022': 'F_Pdd_2022', 'Den_Pdd_22': 'Den_Pdd_22', });
lyr_JumlahPendudukperHektar2022_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Area_Ha': 'Area_Ha', 'Pdd_2022': 'Pdd_2022', 'M_Pdd_2022': 'M_Pdd_2022', 'F_Pdd_2022': 'F_Pdd_2022', 'Den_Pdd_22': 'Den_Pdd_22', });
lyr_KepadatanPendudukperHektar2017_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Area_Ha': 'Area_Ha', 'Pdd_2017': 'Pdd_2017', 'M_Pdd_2017': 'M_Pdd_2017', 'F_Pdd_2017': 'F_Pdd_2017', 'Den_Pdd_17': 'Den_Pdd_17', });
lyr_JumlahPendudukperHektar2017_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Area_Ha': 'Area_Ha', 'Pdd_2017': 'Pdd_2017', 'M_Pdd_2017': 'M_Pdd_2017', 'F_Pdd_2017': 'F_Pdd_2017', 'Den_Pdd_17': 'Den_Pdd_17', });
lyr_KotaMalang_8.set('fieldAliases', {'WADMKK': 'WADMKK', });
lyr_KotaBatu_9.set('fieldAliases', {'WADMKK': 'WADMKK', });
lyr_KabupatenPasuruan_10.set('fieldAliases', {'WADMKK': 'WADMKK', });
lyr_BatasKabupatenMalang_11.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_BatasKecamatanKabupatenMalang_12.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_Batas3KecamatanLawangSingosariJabung_13.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_BatasDesaKelurahan_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Area_Ha': 'Area_Ha', });
lyr_AksesJalan3Kecamatan_15.set('fieldAliases', {'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AliranSungai3Kecamatan_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KantorPemerintahan_17.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_KomoditasUtamaDesaKelurahan_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Area_Ha': 'TextEdit', 'Komoditas': 'TextEdit', });
lyr_KepadatanPendudukperHektar2022_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Area_Ha': 'TextEdit', 'Pdd_2022': 'TextEdit', 'M_Pdd_2022': 'TextEdit', 'F_Pdd_2022': 'TextEdit', 'Den_Pdd_22': 'TextEdit', });
lyr_JumlahPendudukperHektar2022_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Area_Ha': 'TextEdit', 'Pdd_2022': 'TextEdit', 'M_Pdd_2022': 'TextEdit', 'F_Pdd_2022': 'TextEdit', 'Den_Pdd_22': 'TextEdit', });
lyr_KepadatanPendudukperHektar2017_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Area_Ha': 'TextEdit', 'Pdd_2017': 'TextEdit', 'M_Pdd_2017': 'TextEdit', 'F_Pdd_2017': 'TextEdit', 'Den_Pdd_17': 'TextEdit', });
lyr_JumlahPendudukperHektar2017_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Area_Ha': 'TextEdit', 'Pdd_2017': 'TextEdit', 'M_Pdd_2017': 'TextEdit', 'F_Pdd_2017': 'TextEdit', 'Den_Pdd_17': 'TextEdit', });
lyr_KotaMalang_8.set('fieldImages', {'WADMKK': 'TextEdit', });
lyr_KotaBatu_9.set('fieldImages', {'WADMKK': 'TextEdit', });
lyr_KabupatenPasuruan_10.set('fieldImages', {'WADMKK': 'TextEdit', });
lyr_BatasKabupatenMalang_11.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_BatasKecamatanKabupatenMalang_12.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_Batas3KecamatanLawangSingosariJabung_13.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_BatasDesaKelurahan_14.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Area_Ha': 'TextEdit', });
lyr_AksesJalan3Kecamatan_15.set('fieldImages', {'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_AliranSungai3Kecamatan_16.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_KantorPemerintahan_17.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_KomoditasUtamaDesaKelurahan_3.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Area_Ha': 'no label', 'Komoditas': 'inline label', });
lyr_KepadatanPendudukperHektar2022_4.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Area_Ha': 'no label', 'Pdd_2022': 'no label', 'M_Pdd_2022': 'no label', 'F_Pdd_2022': 'no label', 'Den_Pdd_22': 'inline label', });
lyr_JumlahPendudukperHektar2022_5.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Area_Ha': 'no label', 'Pdd_2022': 'inline label', 'M_Pdd_2022': 'no label', 'F_Pdd_2022': 'no label', 'Den_Pdd_22': 'no label', });
lyr_KepadatanPendudukperHektar2017_6.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Area_Ha': 'no label', 'Pdd_2017': 'no label', 'M_Pdd_2017': 'no label', 'F_Pdd_2017': 'no label', 'Den_Pdd_17': 'inline label', });
lyr_JumlahPendudukperHektar2017_7.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Area_Ha': 'no label', 'Pdd_2017': 'inline label', 'M_Pdd_2017': 'no label', 'F_Pdd_2017': 'no label', 'Den_Pdd_17': 'no label', });
lyr_KotaMalang_8.set('fieldLabels', {'WADMKK': 'inline label', });
lyr_KotaBatu_9.set('fieldLabels', {'WADMKK': 'inline label', });
lyr_KabupatenPasuruan_10.set('fieldLabels', {'WADMKK': 'inline label', });
lyr_BatasKabupatenMalang_11.set('fieldLabels', {'WADMKC': 'inline label', });
lyr_BatasKecamatanKabupatenMalang_12.set('fieldLabels', {'WADMKC': 'inline label', });
lyr_Batas3KecamatanLawangSingosariJabung_13.set('fieldLabels', {'WADMKC': 'inline label', });
lyr_BatasDesaKelurahan_14.set('fieldLabels', {'NAMOBJ': 'inline label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Area_Ha': 'no label', });
lyr_AksesJalan3Kecamatan_15.set('fieldLabels', {'REMARK': 'inline label', 'SHAPE_Leng': 'no label', });
lyr_AliranSungai3Kecamatan_16.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'inline label', 'SHAPE_Leng': 'no label', });
lyr_KantorPemerintahan_17.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'inline label', });
lyr_KantorPemerintahan_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});