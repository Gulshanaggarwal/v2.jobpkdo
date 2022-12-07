import { createContext, useState, useEffect, useContext } from 'react';
import {
	onAuthStateChanged,
	signInWithPopup,
	TwitterAuthProvider,
	signOut
} from 'firebase/auth';
import auth from '../lib/firebase';
import { useRouter } from 'next/router'

interface AuthContextProviderProps {
	children: React.ReactNode;
}

interface User {
	screenName: string;
	avatar: string;
	token: string;
}

interface AuthContextProp {
	login: () => void;
	logout: () => void;
	user: User | null;
	loading: boolean;
}

export const AuthContext = createContext<AuthContextProp | undefined>(undefined);

export default function AuthContextProvider({
	children,
}: AuthContextProviderProps) {
	const [loading, setLoading] = useState<boolean>(true);
	const [user, setUser] = useState<User | null>(null);

	const router = useRouter();

	useEffect(() => {
		try {
			const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
				if (user && user.auth) {
					const token = await user.getIdToken();
					setUser({
						screenName: user.auth.currentUser.reloadUserInfo.screenName,
						avatar: user.photoURL,
						token
					})
					router.push('/jobmarket');
				}
				setLoading(false); // setloading to false;
			});
			return () => unsubscribe();
		} catch (error) {
			console.log(error);
		}
	}, []);

	const login = async () => {
		setLoading(true);
		try {
			const res: any = await signInWithPopup(auth, new TwitterAuthProvider());
			setUser({
				screenName: res.user.auth.currentUser.reloadUserInfo.screenName,
				avatar: res.user.photoURL,
				token: res.user.accessToken
			})
			setLoading(false);

		} catch (error) {
			setLoading(false);
			console.error(error);
		}
	};

	const logout = async () => {
		try {
			await signOut(auth);
			window.location.replace('/');

		} catch (error) {
			alert('couldn"t" logout, try again')
		}

	}

	return (
		<AuthContext.Provider value={{ login, logout, user, loading }}>
			{children}
		</AuthContext.Provider>
	);
}


export function useAuthContext() {

	const context = useContext(AuthContext);

	if (context === undefined) throw Error('error');
	return context;


}