// Fondo decorativo de fórmulas matemáticas para el Hero
// @ts-ignore
import { BlockMath } from "react-katex"

export function HeroFormulasBg() {
  return (
    <>
      <style>{`
  @keyframes float1 { 
    0% { transform: translate(0, 0); opacity: 1; } 
    25% { transform: translate(20px, -20px); opacity: 0.3; } 
    50% { transform: translate(0, -40px); opacity: 0.1; } 
    75% { transform: translate(-20px, -20px); opacity: 0.3; } 
    100% { transform: translate(0, 0); opacity: 1; } 
  }
  @keyframes float2 { 
    0% { transform: translate(0, 0); opacity: 1; } 
    25% { transform: translate(-20px, 20px); opacity: 0.2; } 
    50% { transform: translate(0, 40px); opacity: 0; } 
    75% { transform: translate(20px, 20px); opacity: 0.2; } 
    100% { transform: translate(0, 0); opacity: 1; } 
  }
  @keyframes float3 { 
    0% { transform: translate(0, 0); opacity: 1; } 
    25% { transform: translate(20px, 20px); opacity: 0.4; } 
    50% { transform: translate(40px, 0); opacity: 0.1; } 
    75% { transform: translate(20px, -20px); opacity: 0.4; } 
    100% { transform: translate(0, 0); opacity: 1; } 
  }
  @keyframes float4 { 
    0% { transform: translate(0, 0); opacity: 1; } 
    25% { transform: translate(-20px, -20px); opacity: 0.3; } 
    50% { transform: translate(-40px, 0); opacity: 0; } 
    75% { transform: translate(-20px, 20px); opacity: 0.3; } 
    100% { transform: translate(0, 0); opacity: 1; } 
  }
  @keyframes float5 { 
    0% { transform: translate(0, 0); opacity: 1; } 
    25% { transform: translate(15px, -15px); opacity: 0.2; } 
    50% { transform: translate(30px, -30px); opacity: 0; } 
    75% { transform: translate(15px, -15px); opacity: 0.2; } 
    100% { transform: translate(0, 0); opacity: 1; } 
  }
  @keyframes float6 { 
    0% { transform: translate(0, 0); opacity: 1; } 
    25% { transform: translate(-15px, 15px); opacity: 0.4; } 
    50% { transform: translate(-30px, 30px); opacity: 0.1; } 
    75% { transform: translate(-15px, 15px); opacity: 0.4; } 
    100% { transform: translate(0, 0); opacity: 1; } 
  }
`}</style>

      <div className="absolute inset-0 opacity-20 pointer-events-none z-0 text-white">
        {/* Ecuaciones clásicas de física y óptica distribuidas izquierda, centro y derecha */}
        {/* Izquierda */}
        <div style={{position:'absolute',top:'8%',left:'5%',fontSize:'1.1rem',color:'white',animation:'float1 8s ease-in-out infinite'}}>
          <BlockMath math="\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}" />
        </div>
        <div style={{position:'absolute',top:'16%',left:'10%',fontSize:'1.1rem',color:'white',animation:'float2 10s ease-in-out infinite'}}>
          <BlockMath math="\nabla \cdot \vec{B} = 0" />
        </div>
        <div style={{position:'absolute',top:'24%',left:'3%',fontSize:'1.1rem',color:'white',animation:'float3 12s ease-in-out infinite'}}>
          <BlockMath math="\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}" />
        </div>
        <div style={{position:'absolute',top:'32%',left:'12%',fontSize:'1.1rem',color:'white',animation:'float4 9s ease-in-out infinite'}}>
          <BlockMath math="\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}" />
        </div>
        {/* Centro */}
        <div style={{position:'absolute',top:'40%',left:'45%',fontSize:'1.1rem',color:'white',animation:'float5 11s ease-in-out infinite'}}>
          <BlockMath math="n_1 \sin\theta_1 = n_2 \sin\theta_2" />
        </div>
        <div style={{position:'absolute',top:'48%',left:'48%',fontSize:'1.1rem',color:'white',animation:'float6 13s ease-in-out infinite'}}>
          <BlockMath math="\nabla^2 E = \frac{1}{c^2} \frac{\partial^2 E}{\partial t^2}" />
        </div>
        <div style={{position:'absolute',top:'56%',left:'52%',fontSize:'1.1rem',color:'white',animation:'float1 14s ease-in-out infinite'}}>
          <BlockMath math="I(\theta) = I_0 \left( \frac{\sin(\beta)}{\beta} \right)^2" />
        </div>
        <div style={{position:'absolute',top:'64%',left:'50%',fontSize:'1.1rem',color:'white',animation:'float2 15s ease-in-out infinite'}}>
          <BlockMath math="\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}" />
        </div>
        {/* Derecha */}
        <div style={{position:'absolute',top:'8%',left:'85%',fontSize:'1.1rem',color:'white',animation:'float3 8s ease-in-out infinite'}}>
          <BlockMath math="I = I_0 \cos^2\theta" />
        </div>
        <div style={{position:'absolute',top:'16%',left:'80%',fontSize:'1.1rem',color:'white',animation:'float4 10s ease-in-out infinite'}}>
          <BlockMath math="E = h\nu" />
        </div>
        <div style={{position:'absolute',top:'24%',left:'90%',fontSize:'1.1rem',color:'white',animation:'float5 12s ease-in-out infinite'}}>
          <BlockMath math="v = \frac{c}{n}" />
        </div>
        <div style={{position:'absolute',top:'32%',left:'88%',fontSize:'1.1rem',color:'white',animation:'float6 14s ease-in-out infinite'}}>
          <BlockMath math="\lambda = \frac{h}{p}" />
        </div>
        <div style={{position:'absolute',top:'40%',left:'82%',fontSize:'1.1rem',color:'white',animation:'float1 16s ease-in-out infinite'}}>
          <BlockMath math="d \sin \theta = m\lambda" />
        </div>
        {/* Física y óptica: solo ecuaciones relevantes */}
        <div style={{position:'absolute',top:'10%',left:'10%',fontSize:'1.1rem',color:'white',animation:'float1 10s ease-in-out infinite'}}><BlockMath math="\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}" /></div>
        <div style={{position:'absolute',top:'20%',left:'20%',fontSize:'1.1rem',color:'white',animation:'float2 12s ease-in-out infinite'}}><BlockMath math="\nabla \cdot \vec{B} = 0" /></div>
        <div style={{position:'absolute',top:'30%',left:'15%',fontSize:'1.1rem',color:'white',animation:'float3 14s ease-in-out infinite'}}><BlockMath math="\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}" /></div>
        <div style={{position:'absolute',top:'40%',left:'25%',fontSize:'1.1rem',color:'white',animation:'float4 8s ease-in-out infinite'}}><BlockMath math="\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0\varepsilon_0 \frac{\partial \vec{E}}{\partial t}" /></div>
        <div style={{position:'absolute',top:'50%',left:'12%',fontSize:'1.1rem',color:'white',animation:'float5 11s ease-in-out infinite'}}><BlockMath math="n_1 \sin \theta_1 = n_2 \sin \theta_2" /></div>
        <div style={{position:'absolute',top:'60%',left:'18%',fontSize:'1.1rem',color:'white',animation:'float6 13s ease-in-out infinite'}}><BlockMath math="I = I_0 \cos^2 \theta" /></div>
        <div style={{position:'absolute',top:'70%',left:'22%',fontSize:'1.1rem',color:'white',animation:'float1 9s ease-in-out infinite'}}><BlockMath math="E = h\nu" /></div>
        <div style={{position:'absolute',top:'80%',left:'14%',fontSize:'1.1rem',color:'white',animation:'float2 10s ease-in-out infinite'}}><BlockMath math="\lambda = \frac{h}{p}" /></div>
        <div style={{position:'absolute',top:'90%',left:'20%',fontSize:'1.1rem',color:'white',animation:'float3 12s ease-in-out infinite'}}><BlockMath math="d \sin \theta = m\lambda" /></div>
        {/* Centro */}
        <div style={{position:'absolute',top:'10%',left:'50%',fontSize:'1.1rem',color:'white',animation:'float4 11s ease-in-out infinite'}}><BlockMath math="y = \frac{\lambda L}{d} m" /></div>
        <div style={{position:'absolute',top:'20%',left:'55%',fontSize:'1.1rem',color:'white',animation:'float5 13s ease-in-out infinite'}}><BlockMath math="f = \frac{1}{d_o} + \frac{1}{d_i}" /></div>
        <div style={{position:'absolute',top:'30%',left:'60%',fontSize:'1.1rem',color:'white',animation:'float6 9s ease-in-out infinite'}}><BlockMath math="v = f \frac{\Delta \lambda}{\lambda_0}" /></div>
        <div style={{position:'absolute',top:'40%',left:'52%',fontSize:'1.1rem',color:'white',animation:'float1 10s ease-in-out infinite'}}><BlockMath math="\Delta x = \sqrt{\frac{h}{2m\omega}}" /></div>
        <div style={{position:'absolute',top:'50%',left:'58%',fontSize:'1.1rem',color:'white',animation:'float2 12s ease-in-out infinite'}}><BlockMath math="E = mc^2" /></div>
        <div style={{position:'absolute',top:'60%',left:'54%',fontSize:'1.1rem',color:'white',animation:'float3 14s ease-in-out infinite'}}><BlockMath math="\vec{F} = q\vec{E} + q\vec{v} \times \vec{B}" /></div>
        <div style={{position:'absolute',top:'70%',left:'62%',fontSize:'1.1rem',color:'white',animation:'float4 8s ease-in-out infinite'}}><BlockMath math="\vec{p} = m\vec{v}" /></div>
        <div style={{position:'absolute',top:'80%',left:'56%',fontSize:'1.1rem',color:'white',animation:'float5 11s ease-in-out infinite'}}><BlockMath math="\Delta E = h f" /></div>
        <div style={{position:'absolute',top:'90%',left:'60%',fontSize:'1.1rem',color:'white',animation:'float6 13s ease-in-out infinite'}}><BlockMath math="\phi = \frac{q}{\varepsilon_0} \int \vec{E} \cdot d\vec{A}" /></div>
      </div>
    </>
  )
}
