// import { Menu, X } from "lucide-react"
import { useState } from "react";
import { Button, Layout, Menu } from "antd"



const Header = Layout;

const Navbar = () => {

    const [open, setOpen] = useState<boolean>(false);
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong>Business C-Nergy</strong>

        <Menu
          mode="horizontal"
          selectable={false}
          items={[
            { key: 'about', label: <a href="#about">About</a> },
            { key: 'impact', label: <a href="#impact">Impact</a> },
            { key: 'mentors', label: <a href="#mentors">Mentors</a> },
            { key: 'register', label: <a href="#register">Register</a> }
          ]}
        />

        <Button type="primary" href="#register">
          RSVP
        </Button>
      </div>
    </Header>
  )
}

export default Navbar