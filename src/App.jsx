import "./App.css";
import ProductForm from "./components/ProductForm";

// เว็บไซต์นี้จะแสดงผล Product โดยที่จะมีแบบฟอร์มเอาไว้สร้าง Product เพื่อแสดงผล

// ProductForm เป็น Component ที่ใช้แสดงผลแบบฟอร์มที่อยู่ใน src/components/ProductForm.jsx

// ให้เก็บข้อมูลที่ผู้ใช้งานใส่ลงมาใน Input ของ ProductForm ในรูปแบบ Controlled Component

// จากนั้น ให้ Alert ข้อมูลที่ผู้ใช้งานพิมพ์ลงใน Input ในรูปแบบนี้ออกมาบนเว็บไซต์ ด้วย Built-in Function alert

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="app-title">Create Product</h1>
      </div>
      <ProductForm />
    </div>
  );
}

export default App;
