const deepCopy = obj => {
    if (obj instanceof Function)
        return () => obj.apply(this, arguments);

    if (obj instanceof Array)
        return [...obj].map(item => deepCopy(item));

    if (typeof obj !== 'object' || !obj)
        return obj;

    return Object.entries(obj).reduce((accum, [key, value]) => ({...accum, [key]: deepCopy(value)}), {});
};

const obj = {
    a: 23,
    b: 'str',
    c: {
        d: 45,
        e: 'str2',
        f: [1, 2, 3]
    },
    g: ['a', 'b', 'c', {z: 2}],
    h: null,
    i: Date.now(),
    j: undefined,
    k: Symbol('symbol'),
    f: () => 'one',
    m:true
};

const copied = deepCopy(obj);
copied.a = 0;
copied.b = 'aaa';
copied.c.d = 2;
copied.c.e = 'bbb';
copied.c.f.push(4);
copied.g[3].z = 3;
copied.g.push('g');
copied.h = 3;
copied.i = Date.now();
copied.j = 4;
copied.k = Symbol('not original');
copied.f = () => 'two';
copied.m = false;

console.log(obj);
console.log(deepCopy(obj));
console.log(copied);
console.log(obj.f === deepCopy(obj).f);