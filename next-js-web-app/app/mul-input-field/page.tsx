import HeaderMenu from "../headermenu";
import MyFormMulField from "../components/myformmulfield";

export default function Contact() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header className="w-full max-w-3xl px-16 py-4">
        <HeaderMenu/>
      </header>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
           Contact Us
          </h1>
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            
        
        
          
            <MyFormMulField/>

          </div>
        </div>
      </main>
    </div>
  )
}