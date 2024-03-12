import profile from '../../assets/images/profile.png'
export default function Header() {
  return (
    <header className='flex justify-between items-center p-4 mx-4'>
        <h1 className='text-4xl '>Knowledge Cafe</h1>
        <img src={profile} alt="" />
    </header>
  )
}   
