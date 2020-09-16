import storage from '@react-native-firebase/storage';

let getStorageFunc = function (uri) {
    url = storage().ref('hagaren.jpg').getDownloadURL()
    return url
}