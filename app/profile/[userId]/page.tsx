import React from "react";

export default function ProfilePage({ params }: { params: { userId: string } }) {
  return <React.Fragment>
    <section>
        <div>
            Profile: {params.userId}
        </div>
    </section>
  </React.Fragment>;
}
