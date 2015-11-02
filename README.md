# Soundcloud Playlist Finder v2

# Demo: soundcloudplaylistfinder.herokuapp.com

## About:
Soundcloud Playlist Finder allows you to select two songs and find playlists that contain both of those songs.

## Notes:
1. The Soundcloud instant song search is done on the client side using the soundcloud api-v1 and angular.
2. The Soundcloud playlist search is done on the sever side using the soundcloud api-v2, nodejs and angular. Unfortunately the soundcloud api-v2 does not support COORS and the API calls cannot be done on the client side.
3. The app currently searches through 750 playlists for each song. More can be done if search time is increased.

## To Test:
1. Would it be faster if instead of using a double for loop, to add all playlists to a single array, sort and then find duplicates? Or another method?
2. Would it be faster if all of the data from server side is sent to the client side and then had the client perform calculations? Currently sort and playlist calculations are performed server side.
3. Display number of playlists that each song is a part of / how many are being searched. Sometimes songs are a part of fewer than 750 playlists.
