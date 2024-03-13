import profile from '../../assets/images/profile.png'
export default function Header() {
  return (
    <header className='flex justify-between items-center p-2 border-b-2 max-w-7xl mx-auto'>
        <h1 className='text-4xl '>Knowledge Cafe</h1>
        <img src={profile} alt="" />
    </header>
  )
}   
