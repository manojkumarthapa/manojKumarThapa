// Weather Station API
$(document).ready(function(){
    $('#weatherSubmit').click(function(){
        $.ajax({
            url: 'http://api.geonames.org/weatherJSON?',
            data: {
                'north': $('#weatherNorth').val(),
                'south': $('#weatherSouth').val(),
                'east': $('#weatherEast').val(),
                'west': $('#weatherWest').val(),
                'username': 'manoj182'
            },
            success: function(item){            
                if($(item['weatherObservations']).length >=1){
                    console.log(item['weatherObservations']);
                    $('#result').html('<table><thead><tr><th>Station Names: </th></tr></thead><tbody>')
                    $(item['weatherObservations']).each(function(numb, data){
                        $('#result').append('<tr><td>' + data['stationName'] + '</td> <td>Clouds: ' + data['clouds']+'<td>Temperature: ' +data['temperature'] + '&#8451' +'</td></tr>');
                })
                $('#result').append('</tbody></table>');
                }else{
                    $('#result').html('<h3>Please Enter another coordinates</h3><p>Weather Stations not found');
                }
            }
        })
    })
})



// Nearby Place API
$(document).ready(function(){
    $('#placeSubmit').click(function(){
        $.ajax({
            url: 'http://api.geonames.org/findNearbyPlaceNameJSON?',
            data: {
                'lat': $('#nearbyPlaceLat').val(),
                'lng': $('#nearbyPlaceLng').val(),
                'username': 'manoj182'
            },
            success: function(item){                
                console.log(item['geonames']);
               if($(item['geonames']).length >= 1){
                    $('#result').html('<table><tbody>')
                $(item['geonames']).each(function(numb, data){
                    $('#result').append('<tr><td>Country Name: ' + data['countryName'] + '</td> <td>City: ' + data['toponymName']+'<td>Population: ' +data['population'] +'</td></tr>');
                })
                $('#result').append('</tbody></table>');
               }else{
                   $('#result').html("<h3>Please Enter another Lat and Lng</h3><p>Locations Not Found</p>")
               }
            }
        })
    })
})


// Earthquke API

$(document).ready(function(){
    $('#earthquakeSubmit').click(function(){
        $.ajax({
            url: 'http://api.geonames.org/earthquakesJSON?',
            data: {
                'north': $('#earthquakeNorth').val(),
                'south': $('#earthquakeSouth').val(),
                'east': $('#earthquakeEast').val(),
                'west': $('#earthquakeWest').val(),
                'username': 'manoj182'
            },
            success: function(item){            
                console.log(item['earthquakes']);
                if($(item['earthquakes']).length > 0){
                    $('#result').html('<table><thead><tr><th>Earthquakes: </th></tr></thead><tbody>')
                    $(item['earthquakes']).each(function(numb, data){
                        $('#result').append('<tr><td>Date-Time: ' + data['datetime'] + '</td> <td>Magnitude: ' + data['magnitude'] +'</td></tr>');
                })
                $('#result').append('</tbody></table>');
                }else{
                    $('#result').html("<h3>Please Try Another Cooridiates.</h3><br><p>History of Earthquake not found in cooridinates</p>")
                }
            }
        })
    })
})


