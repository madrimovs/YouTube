import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favourite from "../Favourite/Favourite";

import Main from "../Main/Main";
import MyChannel from "../MyChannel/MyChannel";
import SinglePage from "../SinglePage/SinglePage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/single/:id" element={<SinglePage />} />
				<Route path="*" element={<Main />} />
				<Route path="/MyChannel" element={<MyChannel />} />
				<Route path="/favourite-videos" element={<Favourite />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
