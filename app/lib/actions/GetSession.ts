
import { auth } from "@/auth"

export const getServerSideProps = async () => {
const session = await auth()

  return { props: { session } }
}