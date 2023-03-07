import { BrowserRouter, Route, Routes } from "react-router-dom";
import CounterContext from "../Context/CounterContext";

import Main from "../Main/Main";
import MyChannel from "../MyChannel/MyChannel";
import SinglePage from "../SinglePage/SinglePage";

function App() {
	return (
		<CounterContext>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/single/:id" element={<SinglePage />} />
					<Route path="*" element={<Main />} />
					<Route path="/MyChannel" element={<MyChannel />} />
				</Routes>
			</BrowserRouter>
		</CounterContext>
	);
}

export default App;
