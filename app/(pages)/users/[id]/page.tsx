import Image from "next/image";
import ContactButton from "@/components/forms/ContactButton";
import PropertyList from "@/components/properties/PropertyList";
import apiService from "@/services/apiService";
import { getUserId } from "@/lib/actions";

const HostDetailPage = async ({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await paramsPromise;

  const host = await apiService.get(`/api/auth/${id}/`);
  const userId = await getUserId();

  return (
    <main className="max-w-[1440px] mx-auto px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="col-span-1  mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
            {host.avatar_url && (
              <Image
                src={host.avatar_url}
                alt="user"
                width={108}
                height={108}
                className="rounded-full"
              />
            )}
            <h1 className="mt-4 text-xl font-semibold">{host.name}</h1>
            {userId != id && userId != null && (
              <ContactButton userId={userId} hostId={id} />
            )}
          </div>
        </aside>
        <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
          <h1 className="mb-4 text-2xl font-medium">{host.name}'s listings</h1>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <PropertyList hostId={id} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HostDetailPage;
