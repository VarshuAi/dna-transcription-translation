
            const inp = document.getElementById('dna-inp');
            const res = document.getElementById('rna-res');
            function trans() {
                const dna = inp.value.toUpperCase();
                let rna = '';
                for(let i=0; i<dna.length; i++) {
                    if(dna[i] === 'T') rna += 'A';
                    else if(dna[i] === 'A') rna += 'U';
                    else if(dna[i] === 'C') rna += 'G';
                    else if(dna[i] === 'G') rna += 'C';
                }
                res.innerText = rna;
            }
            inp.addEventListener('input', trans);
            trans();
        