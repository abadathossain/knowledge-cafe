import profile from '../../assets/images/profile.png'
export default function Header() {
  return (
    <>
   <div className='flex text-4xl font-bold justify-between p-4 mx-2 border-b-2'>
         <h1>Knowledge Kafe</h1>
         <img src={profile} alt="" />
   </div>
    </>
  )
}
