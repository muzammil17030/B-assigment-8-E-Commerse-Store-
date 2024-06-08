import { BrowserRouter, Routes, Route } from 'React-router-dom';

function ROUTES() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ROUTES;