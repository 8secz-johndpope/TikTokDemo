import videoJson from './server_file/videos.json'
import cityJson from './server_file/city.json'

export default function getServerData(filePath, property, isFromServer = true) {
	return new Promise((resolve, reject) => {
		if (isFromServer) {
			uni.request({
				url: `http://localhost:8080/static/${filePath}`,
				success: (res) => {
					resolve(res.data[property]);
				}
			})
		} else {
			if (property == "city") {
				resolve(cityJson.city)
			} else {
				resolve(videoJson.list)
			}
		}
	});

}
