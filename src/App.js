import './App.css';
import CourseListCard from './compoments/course/CourseListCard';


// 리액트에서는 class 는 예약어 이기 때문에 사용 못하고,
// class 대신 className 이라고 사용한다.
function App() {
  return (
    <main>

   {/* <Header/>
   <Main/>
   <Footer/> */}

      <CourseListCard />
    </main>
  );
}

export default App;
