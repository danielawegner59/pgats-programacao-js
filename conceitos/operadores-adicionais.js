console.log(11 / 2) // 5.5
console.log(parseInt(11 / 2)) // 5.5 -> 5 //o parseInt vai pegar somente a parte inteira do número
//ou seja, o número antes da vírgula


// arredondamento

// arredonda para baixo
console.log(Math.floor(5.8))

// arredonda para cima
console.log(Math.ceil(5.8))

// arredonda para o mais próximo
console.log(Math.round(5.8))
console.log(Math.round(5.4))
console.log(Math.round(5.5)) 

// 
const valorDecimal = 2.123123
console.log(valorDecimal.toFixed(3))//vai definir quantas casas decimais serão exibidas

/**
 
  -- decremento
  ++ incremento

  ?  ternário
  
 */

// incremento
let pesoDoDog = 10
console.log(pesoDoDog)

pesoDoDog++
console.log(pesoDoDog)

// decremento
let pesoDoTutor = 100
console.log(pesoDoTutor)

pesoDoTutor--
console.log(pesoDoTutor)

// ternário
// const porte = pesoDoDog <= 10 ? 'pequeno' : 'médio'  aqui o pequeno representa o verdadeiro e o médio o falso
//               <condicao>      se          se não  
//{/* <condicao> ? <acao se verdadeiro> : <acao se falso> */}


const pesoDoDogOperadorTernario = 21
const porte = pesoDoDogOperadorTernario <= 10 // se if
              ? 'pequeno'
              : pesoDoDogOperadorTernario <= 20 // senao se / else if
              ? 'médio'
              : 'grande' // senao

              // pesoDoDogOperadorTernario <= 10 ? 'pequeno' : pesoDoDogOperadorTernario <= 20 ? 'médio' : 'grande'

              // console.log(porte)

{/* <condicao> ? <acao se verdadeiro> : <acao se falso> */}
