
import { getNextDepositAddress, getUserAccountId } from '@/lib/btc'
import { auth } from '@/auth'

export const UserInfo = async () => {
  const session = await auth();
  if (!session) {
    return null
  }

  const item = getNextDepositAddress({ userId: getUserAccountId(session.user) });
  if (item) {
    return <div>
      <div>Email: {session.user?.email}</div>
      <div>your Btc Address is: {item.address} (You can deposit your BTC via this address)</div>
    </div>
  }
  return <div>internal server error</div>
}