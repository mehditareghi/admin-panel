import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Setting() {
  const router = useRouter();

  // Simulate user permission check
  const hasAccess = false;

  useEffect(() => {
    if (!hasAccess) {
      router.push("/list"); // Redirect unauthorized users to List
    }
  }, [hasAccess, router]);

  if (!hasAccess) {
    return null; // Render nothing while redirecting
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Setting</h1>
      <p>
        This is the restricted Setting page. Only authorized users can see this.
      </p>
    </div>
  );
}
