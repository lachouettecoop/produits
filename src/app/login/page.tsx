import Auth from '@/components/Auth';
import chouetteLogo from '/public/chouetteLogo.svg'
import Image from 'next/image';
export default function Home() {

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 max-w-[500px] m-auto">
            <header className="text-center mb-6">
                <Image src={chouetteLogo} alt="La Chouette Coop" className="mx-auto mb-2" width={"300"} />
                <h1 className="text-2xl font-semibold">Planning</h1>
            </header>
            <p className="text-center mb-6 px-4 text-gray-700">
                Pour te connecter, l&apos;identifiant et le mot de passe sont les mêmes que ceux que tu utilises pour aller sur l&apos;espace membres. Si tu réinitialises ton mot de passe, le changement sera donc valable aussi pour l&apos;espace membres.
            </p>
            <form className="w-full max-w-xs">
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    className="w-full mb-3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="relative mb-3">
                    <input 
                        type="password"
                        placeholder="Mot de passe" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <a href="https://adminchouettos.lachouettecoop.fr/resetting/request" className="block text-right text-green-600 mb-4">Mot de passe oublié ?</a>
                <button 
                    type="submit" 
                    className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
                >
                    CONNEXION
                </button>
            </form>
            <div><Auth /></div>
        </div>
  );
}
