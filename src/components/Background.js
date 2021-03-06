import React from "react";
import axios from "axios";
export default function Background(props) {
	//get background from unsplash
	React.useEffect(() => {
		const getBackground = async () => {
			const response = await axios.get(
				"https://api.unsplash.com/photos/random?client_id=qmVaKW82sk_6DGdzL7kS_BNFDDGeIPoqfkqdfjQ3CiY&orientation=landscape&query=space"
			);
			if (response.status === 200) {
				props.getImg(response.data.urls.full);
			}
		};
		getBackground();
	}, []);

	return <></>;
}
